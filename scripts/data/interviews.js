/**
 * PROGRAMMINGWALA - Interview Questions Dataset
 * Structured questions containing theory, code, real-world scenario, tip, and common mistake.
 */

const INTERVIEW_TOPICS = [
  {
    id: 'java',
    url: '/interview-questions/java/',
    title: 'Top Java Interview Questions & Answers (Core Java to Java 21)',
    h1: 'Enterprise Java Interview Questions & Answers',
    metaDescription: 'Crack technical Java interviews. In-depth answers with code, real scenarios, JVM internals, memory allocation, collections, and common mistakes.',
    category: 'Java',
    courseUrl: '/courses/java/index.html',
    questions: [
      {
        q: 'Why is String immutable in Java, and how does the String Constant Pool function?',
        theory: 'In Java, String objects cannot be modified once instantiated. Any operation that appears to mutate a String creates a new object in memory.',
        answer: 'String immutability provides three critical advantages: 1) Security: Strings are widely used to store sensitive network connections, passwords, and file paths; mutable strings could be altered maliciously across threads. 2) Synchronization: Immutable strings are inherently thread-safe without explicit synchronization. 3) Caching: Immutability enables the JVM to maintain the String Constant Pool (SCP) in heap memory, reusing identical string literals to dramatically reduce memory footprint.',
        example: `String s1 = "Ghaziabad";
String s2 = "Ghaziabad";
System.out.println(s1 == s2); // true: Points to identical object in SCP

String s3 = new String("Ghaziabad");
System.out.println(s1 == s3); // false: New object on regular heap
System.out.println(s1.equals(s3)); // true: Value comparison`,
        scenario: 'In a high-throughput payment gateway processing millions of order requests, passing order IDs as immutable Strings ensures no background thread can tamper with the transaction reference during database verification.',
        proTip: 'When an interviewer asks about String immutability, always mention how String caches its hashCode() on first computation, making it the ideal key in HashMaps.',
        mistake: 'Using regular String concatenation (+) inside loops instead of StringBuilder, which creates thousands of discarded intermediate String objects and burdens the Garbage Collector.',
        relatedQ: 'What is the difference between String, StringBuilder, and StringBuffer?'
      },
      {
        q: 'What is the difference between fail-fast and fail-safe iterators in Java Collections?',
        theory: 'Iterators traverse collections and respond differently when the collection is structurally modified during iteration.',
        answer: 'Fail-fast iterators (e.g. ArrayList, HashMap) immediately throw ConcurrentModificationException if the underlying collection is modified structurally (adding or removing elements) by any means other than the iterator own remove() method. They detect this using an internal modCount flag. Fail-safe (or weakly consistent) iterators (e.g. CopyOnWriteArrayList, ConcurrentHashMap) traverse a snapshot of the collection or tolerate concurrent modifications without throwing an exception.',
        example: `List<String> list = new ArrayList<>(List.of("A", "B", "C"));
for (String item : list) {
    if (item.equals("B")) {
        // Throws ConcurrentModificationException!
        list.remove(item);
    }
}

// Correct approach using Iterator
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (it.next().equals("B")) {
        it.remove(); // Safe and supported
    }
}`,
        scenario: 'In an active multiplayer game server, broadcasting player positions to connected clients while new players join requires fail-safe collections like CopyOnWriteArrayList to avoid crashes during tick cycles.',
        proTip: 'Mention that fail-safe iterators trade off memory consumption because CopyOnWrite collections copy the entire underlying array on every write operation.',
        mistake: 'Assuming that fail-fast iterators guarantee thread-safety. Fail-fast is only a best-effort bug detection mechanism, not a concurrency synchronization strategy.',
        relatedQ: 'How does ConcurrentHashMap achieve high concurrency without locking the entire table?'
      },
      {
        q: 'How do Java 21 Virtual Threads differ from traditional Platform Threads?',
        theory: 'Project Loom introduced Virtual Threads to decouple Java threads from OS kernel threads.',
        answer: 'Traditional Platform Threads wrap a 1:1 underlying operating system kernel thread, consuming approximately 1MB of stack memory and requiring expensive kernel context switches. The JVM is typically limited to thousands of platform threads. Virtual Threads (Java 21) are lightweight user-mode threads managed entirely by the JVM. Millions of virtual threads can run concurrently; when a virtual thread performs blocking I/O (like an HTTP call or database query), the JVM unmounts it from its carrier OS thread, allowing other virtual threads to execute.',
        example: `// Spawning 10,000 concurrent Virtual Threads effortlessly
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 10_000; i++) {
        final int taskId = i;
        executor.submit(() -> {
            Thread.sleep(100); // Non-blocking unmount on Virtual Thread
            return "Task " + taskId + " completed";
        });
    }
} // Automatically awaits completion`,
        scenario: 'A microservice handling thousands of simultaneous incoming REST calls waiting on downstream third-party database calls can adopt Virtual Threads to achieve immense throughput without rewriting code into complex reactive streams.',
        proTip: 'Highlight that Virtual Threads are designed for I/O-bound tasks, not CPU-bound number crunching where carrier threads remain pegged.',
        mistake: 'Pooling Virtual Threads using thread pools. Virtual Threads should never be pooled; they are cheap to create and should be instantiated per task.',
        relatedQ: 'What is thread pinning in Java Virtual Threads?'
      }
    ]
  },
  {
    id: 'spring-boot',
    url: '/interview-questions/spring-boot/',
    title: 'Top Spring Boot Interview Questions & Answers (Spring Boot 3)',
    h1: 'Spring Boot 3 Technical Interview Questions & Answers',
    metaDescription: 'Master Spring Boot interviews: IoC container, Bean scopes, Auto-configuration, Spring Data JPA, Hibernate N+1 query problem, and Spring Security.',
    category: 'Java',
    courseUrl: '/courses/spring-boot/index.html',
    questions: [
      {
        q: 'How does Spring Boot Auto-Configuration work under the hood?',
        theory: 'Auto-configuration inspects the application classpath, existing beans, and configuration properties to automatically wire reasonable defaults.',
        answer: 'Spring Boot leverages @EnableAutoConfiguration (included in @SpringBootApplication). During bootstrap, Spring factories loaders inspect META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports. Each configuration class utilizes conditional annotations such as @ConditionalOnClass, @ConditionalOnMissingBean, and @ConditionalOnProperty. If the required classes (like Tomcat or DataSource) are on the classpath and no custom bean is defined, Spring Boot instantiates and registers the default bean.',
        example: `@Configuration
@ConditionalOnClass(DataSource.class)
@ConditionalOnMissingBean(DataSource.class)
public class DataSourceAutoConfiguration {
    // Automatically creates HikariCP DataSource if user hasn't defined one!
}`,
        scenario: 'Adding spring-boot-starter-data-jpa and postgresql dependency to pom.xml automatically initializes a HikariCP connection pool without needing manual XML configuration.',
        proTip: 'Mention how to debug auto-configuration by starting the application with the --debug flag to generate the ConditionsEvaluationReport.',
        mistake: 'Failing to realize that defining your own @Bean of a specific type automatically overrides the auto-configured default bean due to @ConditionalOnMissingBean.',
        relatedQ: 'What is the purpose of spring-boot-starter-parent?'
      },
      {
        q: 'What is the Hibernate N+1 Query Problem and how do you resolve it in Spring Data JPA?',
        theory: 'The N+1 problem occurs when fetching an entity with lazy relationships triggers one initial query plus N additional queries for each child record.',
        answer: 'When fetching an entity (e.g. 100 Orders) where each order has a lazily loaded Customer, accessing order.getCustomer() in a loop executes 1 query for the orders, followed by 100 individual queries for each customer (1 + N = 101 queries). This severely degrades database performance. It can be resolved by: 1) Using JOIN FETCH in JPQL queries. 2) Applying @EntityGraph on repository query methods to specify which relationships should be eagerly fetched in a single SQL JOIN.',
        example: `// Problematic: default lazy fetch in repository
List<Order> findAll(); // Generates 1 query for orders + N queries for customers

// Solution 1: JPQL JOIN FETCH
@Query("SELECT o FROM Order o JOIN FETCH o.customer")
List<Order> findAllWithCustomer();

// Solution 2: Spring Data @EntityGraph
@EntityGraph(attributePaths = {"customer"})
List<Order> findAll();`,
        scenario: 'An admin reporting dashboard displaying recent order rows alongside customer contact info was timing out under load until JOIN FETCH replaced default lazy proxy iterations.',
        proTip: 'Emphasize that changing FetchType to EAGER on the entity model does not solve N+1; it simply triggers the N queries eagerly. JOIN FETCH or Entity Graphs are the true solutions.',
        mistake: 'Setting all relationships to FetchType.EAGER globally, which leads to massive unneeded data transfers across all other queries in the application.',
        relatedQ: 'What is the difference between FetchType.LAZY and FetchType.EAGER?'
      }
    ]
  },
  {
    id: 'python',
    url: '/interview-questions/python/',
    title: 'Top Python Interview Questions & Answers (Core Python to Advanced)',
    h1: 'Python Developer Technical Interview Questions & Answers',
    metaDescription: 'Essential Python interview questions: GIL, mutable default arguments, memory management, generators vs iterators, and decorators.',
    category: 'Python',
    courseUrl: '/courses/python/index.html',
    questions: [
      {
        q: 'What is the Python Global Interpreter Lock (GIL) and how does it impact concurrency?',
        theory: 'The GIL is a mutex that prevents multiple native threads from executing Python bytecodes simultaneously in CPython.',
        answer: 'CPython memory management is not thread-safe because it relies on reference counting. The GIL ensures only one thread holds control of the Python interpreter at any given moment. Consequently, multi-threaded Python programs do not achieve multi-core CPU parallelism for CPU-bound computations (like mathematical calculations). However, for I/O-bound operations (network requests, disk access), threads release the GIL while waiting, allowing efficient concurrency. For CPU-bound parallelism, the multiprocessing module or process pools must be used.',
        example: `import threading

counter = 0
def increment():
    global counter
    for _ in range(1_000_000):
        counter += 1

# Despite 2 threads, CPython executes them sequentially on 1 CPU core
t1 = threading.Thread(target=increment)
t2 = threading.Thread(target=increment)
t1.start(); t2.start()
t1.join(); t2.join()`,
        scenario: 'A web crawler scraping 500 web pages benefits massively from multithreading (or asyncio) because threads spend 99% of time waiting on network sockets with the GIL released.',
        proTip: 'Mention that Python 3.13 introduces an experimental free-threaded mode (PEP 703) to optionally disable the GIL for multi-core scaling.',
        mistake: 'Assuming multithreading speeds up heavy machine learning training loops in pure Python without offloading to compiled C libraries like NumPy or PyTorch.',
        relatedQ: 'What is the difference between multiprocessing and multithreading in Python?'
      },
      {
        q: 'Why is using a mutable object as a default parameter in Python a major trap?',
        theory: 'Default argument values in Python are evaluated once when the function definition is executed, not each time the function is called.',
        answer: 'If you use a mutable object (like a list or dictionary) as a default parameter, that single object instance is shared across every subsequent call to the function that omits the parameter. Any mutation persists across calls, leading to subtle data leakage bugs. The standard idiom is to use None as the default value and instantiate a new list inside the function body.',
        example: `// BAD: Shared mutable default list
def append_item(item, target_list=[]):
    target_list.append(item)
    return target_list

print(append_item(1)) # [1]
print(append_item(2)) # [1, 2] -- Unexpected retention!

// GOOD: Safe Python idiom
def safe_append(item, target_list=None):
    if target_list is None:
        target_list = []
    target_list.append(item)
    return target_list`,
        scenario: 'In an order processing function, defaulting tags=[] resulted in customer notes from earlier transactions bleeding into subsequent unrelated customers orders.',
        proTip: 'Interviewers love this question because it tests whether you understand Python object binding at definition time versus call time.',
        mistake: 'Writing def add(item, items=[]): and assuming items is re-instantiated on each function call.',
        relatedQ: 'What are the differences between deepcopy and shallow copy in Python?'
      }
    ]
  },
  {
    id: 'sql',
    url: '/interview-questions/sql/',
    title: 'Top SQL & Relational Database Interview Questions & Answers',
    h1: 'SQL Querying & Database Architecture Interview Questions',
    metaDescription: 'Crack SQL developer interviews: Window functions, CTEs, Clustered vs Non-clustered indexes, ACID properties, and query optimization.',
    category: 'Database',
    courseUrl: '/courses/sql/index.html',
    questions: [
      {
        q: 'What are SQL Window Functions and how do they differ from GROUP BY?',
        theory: 'Window functions perform calculations across a set of table rows related to the current row without collapsing the rows.',
        answer: 'While a GROUP BY clause aggregates rows and collapses them into a single summary row per group, Window Functions (using the OVER clause with PARTITION BY and ORDER BY) compute aggregate or ranking values while preserving the original row-level identity. This makes them indispensable for running totals, moving averages, and finding the Nth highest value.',
        example: `-- Finding the top 2 highest scoring students in each course
WITH RankedStudents AS (
    SELECT 
        student_name,
        course_name,
        score,
        DENSE_RANK() OVER (PARTITION BY course_name ORDER BY score DESC) as rank_pos
    FROM student_evaluations
)
SELECT student_name, course_name, score
FROM RankedStudents
WHERE rank_pos <= 2;`,
        scenario: 'Calculating month-over-month revenue growth where each transaction row needs to display both the current transaction amount and the running cumulative total for the year.',
        proTip: 'Know the exact differences between ROW_NUMBER(), RANK(), and DENSE_RANK() when ties occur in ordering.',
        mistake: 'Attempting to filter window functions directly in the WHERE clause instead of wrapping them inside a CTE or subquery.',
        relatedQ: 'What is the difference between RANK() and DENSE_RANK()?'
      }
    ]
  },
  {
    id: 'javascript',
    url: '/interview-questions/javascript/',
    title: 'Top JavaScript Interview Questions & Answers (ES6+ to Async)',
    h1: 'Modern JavaScript Technical Interview Questions & Answers',
    metaDescription: 'Ace JavaScript interviews: Closures, Event Delegation, Prototypes, Promise.all vs Promise.allSettled, and the Event Loop.',
    category: 'Web',
    courseUrl: '/courses/javascript/index.html',
    questions: [
      {
        q: 'What is Event Delegation in JavaScript and why is it useful for performance?',
        theory: 'Event delegation is a pattern of handling events at a parent element instead of attaching listeners to multiple child elements.',
        answer: 'Event delegation relies on the mechanism of event bubbling: when an event occurs on a DOM element, it bubbles upward through all its parent ancestors in the DOM tree. By attaching a single event listener to a common ancestor element and inspecting event.target, we can manage events for dozens or hundreds of child elements (including dynamic elements added in the future), dramatically lowering browser memory consumption.',
        example: `// Single listener on parent <ul> instead of 100 <li> listeners
document.getElementById('studentList').addEventListener('click', (event) => {
    const target = event.target.closest('li');
    if (target && target.dataset.id) {
        console.log("Selected Student ID:", target.dataset.id);
    }
});`,
        scenario: 'In an infinite-scrolling feed rendering thousands of comment cards, attaching individual click handlers to each button crashes mobile browsers, whereas a single delegated parent listener remains lightning-fast.',
        proTip: 'Always use event.target.closest(selector) inside the listener to handle clicks on nested child elements like SVG icons or span text.',
        mistake: 'Attaching individual event listeners inside a loop when rendering dynamic DOM items.',
        relatedQ: 'What is the difference between event bubbling and event capturing?'
      }
    ]
  },
  {
    id: 'seo',
    url: '/interview-questions/technical-seo/',
    title: 'Top Technical SEO Interview Questions & Answers for 2026',
    h1: 'Technical SEO Technical Interview Questions & Answers',
    metaDescription: 'Master Technical SEO interviews: Crawl budget, Canonical tags, Core Web Vitals (LCP, INP, CLS), Schema markup, and HTTP status codes.',
    category: 'SEO',
    courseUrl: '/courses/seo/index.html',
    questions: [
      {
        q: 'What is a Canonical Tag and how does it prevent duplicate content penalties?',
        theory: 'A canonical tag (rel="canonical") is an HTML link element that specifies the preferred authoritative URL of a web page.',
        answer: 'Search engines treat URLs with different protocols (http vs https), trailing slashes, www subdomains, or URL tracking parameters (?utm_source) as distinct documents. If identical or substantially similar content is accessible across multiple URLs, search engines may split ranking signals or index the wrong version. A canonical tag signals to Googlebot which single URL should accumulate all link equity and appear in search results.',
        example: `<!-- Specified in the <head> of https://programmingwala.com/courses/java/?ref=social -->
<link rel="canonical" href="https://programmingwala.com/courses/java/">`,
        scenario: 'An e-commerce catalog allowing filtering by color, size, and price generates hundreds of parameterized URLs. Self-referencing canonical tags pointing back to the clean base category URL ensure search engines only index the primary category page.',
        proTip: 'State clearly that canonical tags are hints to search engines, not absolute directives like 301 redirects; if a canonicalized page has substantially different content, Google may ignore it.',
        mistake: 'Using relative paths in canonical tags (e.g. href="/page") instead of full absolute URLs including protocol and domain.',
        relatedQ: 'When should you use a 301 redirect instead of a canonical tag?'
      }
    ]
  }
];

module.exports = { INTERVIEW_TOPICS };
