/**
 * PROGRAMMINGWALA - Tutorials Dataset
 * Rich, original, in-depth technical tutorials with working code, memory breakdowns, and takeaways.
 */

const TUTORIALS = [
  // ================= JAVA TUTORIALS =================
  {
    id: 'java-hashmap',
    url: '/tutorials/java/hashmap/',
    category: 'Java',
    categoryUrl: '/courses/java/index.html',
    title: 'What is HashMap in Java? Internal Working, Hashing & Collision Handling',
    h1: 'How Java HashMap Works Internally: Hashing, Buckets & Red-Black Trees',
    metaDescription: 'Deep architectural dive into Java HashMap: hashing algorithm, bucket array, linked list collision chaining, treeification to Red-Black tree, and load factor.',
    code: `// Demonstrating HashMap insertion, collision resistance and traversal
import java.util.HashMap;
import java.util.Map;

public class HashMapDeepDive {
    public static void main(String[] args) {
        // Initial capacity: 16, Load factor: 0.75
        Map<String, Integer> studentScores = new HashMap<>();

        studentScores.put("Amit", 92);
        studentScores.put("Priya", 98);
        studentScores.put("Rohit", 85);

        // Accessing value via O(1) average time complexity
        System.out.println("Priya's Score: " + studentScores.get("Priya"));

        // Iterating over key-value entries safely
        for (Map.Entry<String, Integer> entry : studentScores.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}`,
    explanation: `
      <h3>1. The Internal Architecture of HashMap</h3>
      <p>In Java, <code>HashMap</code> implements the <code>Map</code> interface based on a hash table data structure. Internally, a HashMap maintains an array of <code>Node&lt;K,V&gt;</code> buckets. The default initial capacity is 16, and the default load factor is 0.75.</p>

      <h3>2. The Put Operation & Index Calculation</h3>
      <p>When you invoke <code>map.put(key, value)</code>, Java executes the following steps:</p>
      <ol>
        <li><strong>Compute Key Hash:</strong> Java invokes <code>key.hashCode()</code> and applies a supplemental bit-shift hash function: <code>(h = key.hashCode()) ^ (h &gt;&gt;&gt; 16)</code> to spread higher bits into lower bits, minimizing collisions.</li>
        <li><strong>Compute Bucket Index:</strong> The target bucket array index is determined via bitwise AND: <code>index = (n - 1) &amp; hash</code>, where <code>n</code> is the array length (always a power of two).</li>
        <li><strong>Collision Check:</strong> If the bucket at that index is empty, a new <code>Node</code> is stored directly. If a node already exists, a hash collision has occurred.</li>
      </ol>

      <h3>3. Collision Resolution: Linked List vs. Treeification</h3>
      <p>Prior to Java 8, colliding entries were linked sequentially as a singly-linked list. Under heavy collisions, lookup degraded from <code>O(1)</code> to <code>O(n)</code>. From Java 8 onward, once a single bucket exceeds 8 nodes (TREEIFY_THRESHOLD) and total map capacity reaches at least 64, the linked list converts into a balanced <strong>Red-Black Tree (TreeNode)</strong>. This guarantees worst-case lookup performance of <code>O(log n)</code>.</p>
    `,
    takeaways: [
      'HashMap is not thread-safe; use ConcurrentHashMap in multi-threaded environments.',
      'Always override both hashCode() and equals() when using custom classes as keys.',
      'Immutable classes like String and Integer make ideal keys because their hash code is cached.'
    ],
    faqs: [
      {
        question: 'Why is HashMap capacity always a power of two?',
        answer: 'Power-of-two sizing allows calculating the bucket index with bitwise AND (n - 1) & hash instead of expensive modulo division operations.'
      },
      {
        question: 'What happens when the load factor is exceeded?',
        answer: 'When size exceeds capacity * load factor (16 * 0.75 = 12), the bucket array doubles in size (32), and all existing elements are rehashed.'
      }
    ]
  },
  {
    id: 'java-garbage-collection',
    url: '/tutorials/java/garbage-collection/',
    category: 'Java',
    categoryUrl: '/courses/java/index.html',
    title: 'How Java Garbage Collection Works: Heap Memory, Generations & Collectors',
    h1: 'Java Garbage Collection Explained: G1, ZGC & Generational Heap',
    metaDescription: 'Understand how the Java JVM reclaims heap memory. Learn Young Generation, Eden, Survivor spaces, Old Generation, Stop-the-World pauses, G1, and ZGC.',
    code: `// Demonstrating object eligibility for Garbage Collection
public class GCDemo {
    private String resourceId;

    public GCDemo(String id) {
        this.resourceId = id;
    }

    public static void main(String[] args) {
        GCDemo obj1 = new GCDemo("ActiveResource-1");
        GCDemo obj2 = new GCDemo("TemporaryResource-2");

        // obj2 becomes eligible for garbage collection once reassigned to null
        obj2 = null;

        // Island of isolation example
        Node a = new Node();
        Node b = new Node();
        a.neighbor = b;
        b.neighbor = a;
        a = null;
        b = null; // Both objects now unreferenced from GC Roots
    }
}

class Node {
    Node neighbor;
}`,
    explanation: `
      <h3>1. JVM Heap Organization: The Generational Hypothesis</h3>
      <p>Java's Garbage Collector operates on the empirical observation known as the <em>Weak Generational Hypothesis</em>: the vast majority of allocated objects have very short lifespans (e.g. temporary loop variables, method parameters). To optimize reclamation, the JVM heap is segmented into distinct generations:</p>
      <ul>
        <li><strong>Young Generation:</strong> Composed of the <strong>Eden space</strong> and two <strong>Survivor spaces (S0 and S1)</strong>. All newly instantiated objects are placed in Eden.</li>
        <li><strong>Old (Tenured) Generation:</strong> Holds long-lived objects that survive multiple minor garbage collection cycles.</li>
      </ul>

      <h3>2. Minor GC vs. Major/Full GC</h3>
      <p>When the Eden space fills up, the JVM triggers a <strong>Minor GC</strong>. Live objects are marked using reachability analysis from GC Roots (threads, static variables, local variables) and copied into a Survivor space. Dead objects are discarded immediately without fragmentation. After surviving several rounds (tenuring threshold, default 15), survivors are promoted to the Old Generation.</p>

      <h3>3. Modern Production Collectors: G1 and ZGC</h3>
      <p>Modern enterprise applications utilize advanced low-pause collectors:</p>
      <ul>
        <li><strong>Garbage-First (G1 GC):</strong> Partitions the heap into equal-sized regions and prioritizes collecting regions with the most garbage first within a target pause time budget.</li>
        <li><strong>ZGC (Z Garbage Collector):</strong> A scalable low-latency collector capable of sub-millisecond pauses on terabyte heaps using colored pointers and load barriers.</li>
      </ul>
    `,
    takeaways: [
      'Objects are eligible for GC when they are no longer reachable from any active GC Root.',
      'System.gc() is only a hint to the JVM and does not guarantee immediate collection.',
      'Profiling tools like VisualVM and JConsole help detect memory leaks caused by lingering static references.'
    ],
    faqs: [
      {
        question: 'What are GC Roots?',
        answer: 'GC Roots are anchor points outside the heap, such as active thread stack local variables, JNI references, and static class fields.'
      }
    ]
  },
  {
    id: 'java-multithreading',
    url: '/tutorials/java/multithreading/',
    category: 'Java',
    categoryUrl: '/courses/java/index.html',
    title: 'Java Multithreading & Concurrency Tutorial: Threads, Locks & Pools',
    h1: 'Java Multithreading Tutorial: Thread Lifecycle, Synchronization & Executors',
    metaDescription: 'Complete tutorial on Java Multithreading: Thread vs Runnable, synchronized keyword, volatile memory semantics, deadlocks, and ExecutorService thread pools.',
    code: `import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class ConcurrencyMastery {
    private static final AtomicInteger counter = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException {
        // Production standard: Using thread pool instead of manual Thread creation
        ExecutorService executor = Executors.newFixedThreadPool(4);

        for (int i = 0; i < 1000; i++) {
            executor.submit(() -> {
                // Thread-safe atomic increment without explicit synchronization lock
                counter.incrementAndGet();
            });
        }

        executor.shutdown();
        executor.awaitTermination(5, TimeUnit.SECONDS);

        System.out.println("Final Thread-Safe Counter Value: " + counter.get());
    }
}`,
    explanation: `
      <h3>1. Thread Creation: Why ExecutorService is Preferred</h3>
      <p>While you can create threads by subclassing <code>Thread</code> or implementing <code>Runnable</code>, production software should always manage concurrency through an <code>ExecutorService</code>. Manually creating threads incurs heavy OS context-switching overhead and risks unbounded thread creation under load.</p>

      <h3>2. The Java Memory Model & Volatile</h3>
      <p>Modern CPUs cache variables in L1/L2 hardware caches. When multiple threads access a shared field, one thread's update might not be immediately visible to another. Declaring a variable as <code>volatile</code> guarantees visibility and prevents instruction reordering across hardware threads.</p>

      <h3>3. Synchronization vs. Atomic Classes</h3>
      <p>The <code>synchronized</code> keyword enforces mutual exclusion via intrinsic monitor locks. However, for simple counters and flags, Java provides lock-free <code>java.util.concurrent.atomic</code> classes (like <code>AtomicInteger</code>) using hardware-level Compare-And-Swap (CAS) instructions for superior throughput.</p>
    `,
    takeaways: [
      'Avoid new Thread().start() in production web applications; use ExecutorService thread pools.',
      'Protect shared mutable state using either locks or atomic CAS data types.',
      'Java 21 introduces Virtual Threads for high-throughput lightweight I/O concurrency.'
    ],
    faqs: [
      {
        question: 'What is a deadlock and how can it be prevented?',
        answer: 'A deadlock occurs when two threads are blocked waiting for locks held by each other. It can be prevented by always acquiring locks in a strict, consistent global order.'
      }
    ]
  },
  {
    id: 'java-stream-api',
    url: '/tutorials/java/stream-api/',
    category: 'Java',
    categoryUrl: '/courses/java/index.html',
    title: 'Java Stream API Tutorial: Filter, Map, Reduce, FlatMap & Collectors',
    h1: 'Java Stream API: Functional Pipelines, Transformations & Reductions',
    metaDescription: 'Learn Java 8+ Stream API with practical examples: filter, map, flatMap, sorted, distinct, reduce, Collectors.groupingBy, and parallel streams.',
    code: `import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class StreamApiTutorial {
    public record Developer(String name, String skill, int yearsExp) {}

    public static void main(String[] args) {
        List<Developer> devs = Arrays.asList(
            new Developer("Vikas", "Java", 6),
            new Developer("Sneha", "Python", 4),
            new Developer("Karan", "Java", 8),
            new Developer("Pooja", "React", 3)
        );

        // Group senior developers by primary skill
        Map<String, List<Developer>> groupedBySkill = devs.stream()
            .filter(d -> d.yearsExp() >= 4)
            .collect(Collectors.groupingBy(Developer::skill));

        groupedBySkill.forEach((skill, list) -> {
            System.out.println(skill + ": " + list.stream().map(Developer::name).toList());
        });
    }
}`,
    explanation: `
      <h3>1. Streams vs. Collections</h3>
      <p>A collection is an in-memory data structure that holds elements, while a <strong>Stream</strong> is a computational pipeline that processes elements on-demand. Streams do not mutate their underlying source; they yield transformations lazily.</p>

      <h3>2. Intermediate vs. Terminal Operations</h3>
      <p>Stream pipelines consist of two distinct types of operations:</p>
      <ul>
        <li><strong>Intermediate Operations:</strong> (e.g. <code>filter()</code>, <code>map()</code>, <code>flatMap()</code>, <code>sorted()</code>) Return another Stream and execute lazily. No computation happens until a terminal operation is called.</li>
        <li><strong>Terminal Operations:</strong> (e.g. <code>collect()</code>, <code>forEach()</code>, <code>reduce()</code>, <code>count()</code>) Trigger traversal of the pipeline and produce a concrete result or side-effect.</li>
      </ul>
    `,
    takeaways: [
      'Streams are single-use; once a terminal operation executes, the stream cannot be reused.',
      'Prefer method references (Class::method) for concise functional code.',
      'Use parallelStream() judiciously only for CPU-bound computations on large datasets.'
    ],
    faqs: [
      {
        question: 'What is the difference between map() and flatMap()?',
        answer: 'map() transforms each element into a single value, while flatMap() transforms each element into a stream and flattens multiple streams into a single consolidated stream.'
      }
    ]
  },
  {
    id: 'java-lambda-expressions',
    url: '/tutorials/java/lambda-expressions/',
    category: 'Java',
    categoryUrl: '/courses/java/index.html',
    title: 'Java Lambda Expressions & Functional Interfaces Complete Guide',
    h1: 'Java Lambda Expressions, Method References & Functional Interfaces',
    metaDescription: 'Master Java lambda syntax: functional interfaces (@FunctionalInterface), Predicate, Function, Consumer, Supplier, and lexical scoping.',
    code: `import java.util.function.Predicate;
import java.util.function.Function;

public class LambdaGuide {
    public static void main(String[] args) {
        // Predicate: takes an input and returns a boolean
        Predicate<String> isValidPhone = phone -> phone != null && phone.matches("\\\\d{10}");
        System.out.println("Valid phone: " + isValidPhone.test("7503962162"));

        // Function: takes T and returns R
        Function<String, Integer> stringLength = String::length;
        System.out.println("Length: " + stringLength.apply("Ghaziabad"));
    }
}`,
    explanation: `
      <h3>1. What is a Lambda Expression?</h3>
      <p>A lambda expression is an anonymous block of code that provides an implementation of a <strong>Single Abstract Method (SAM)</strong> interface, commonly known as a Functional Interface. Introduced in Java 8, lambdas eliminate verbose anonymous inner classes.</p>
      <h3>2. Core Built-in Functional Interfaces</h3>
      <p>Java provides standard functional interfaces in <code>java.util.function</code>:</p>
      <ul>
        <li><code>Predicate&lt;T&gt;</code>: <code>boolean test(T t)</code> for filtering conditions.</li>
        <li><code>Function&lt;T, R&gt;</code>: <code>R apply(T t)</code> for mapping and transforming data.</li>
        <li><code>Consumer&lt;T&gt;</code>: <code>void accept(T t)</code> for operations with side effects.</li>
        <li><code>Supplier&lt;T&gt;</code>: <code>T get()</code> for deferred value generation.</li>
      </ul>
    `,
    takeaways: [
      'Functional interfaces are marked with @FunctionalInterface.',
      'Lambdas can capture effectively final variables from enclosing lexical scopes.',
      'Method references provide clean shorthand syntax when a lambda simply forwards parameters to an existing method.'
    ],
    faqs: [
      { question: 'Can a functional interface have default methods?', answer: 'Yes! A functional interface can have multiple default and static methods, as long as it has exactly one abstract method.' }
    ]
  },
  {
    id: 'spring-boot-rest-api',
    url: '/tutorials/java/spring-boot-rest-api/',
    category: 'Java',
    categoryUrl: '/courses/spring-boot/index.html',
    title: 'Building a Production-Ready REST API with Spring Boot 3 & Jakarta Validation',
    h1: 'How to Build a RESTful API in Spring Boot 3: Best Practices & Validation',
    metaDescription: 'Step-by-step tutorial for Spring Boot 3 REST API development: @RestController, @PostMapping, @Valid, DTO patterns, ProblemDetails, and HttpStatus.',
    code: `package com.programmingwala.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

@RestController
@RequestMapping("/api/v1/inquiries")
public class InquiryController {

    public record InquiryDTO(
        @NotBlank(message = "Name cannot be empty") String name,
        @Pattern(regexp = "^\\\\d{10}$", message = "Phone must be 10 digits") String phone
    ) {}

    @PostMapping
    public ResponseEntity<String> submitInquiry(@Valid @RequestBody InquiryDTO dto) {
        // Service processing logic here...
        return ResponseEntity.status(HttpStatus.CREATED).body("Inquiry logged for: " + dto.name());
    }
}`,
    explanation: `
      <h3>1. REST Controller Architecture</h3>
      <p>Spring Boot simplifies REST API creation with annotations like <code>@RestController</code>, which combines <code>@Controller</code> and <code>@ResponseBody</code>. Each method serializes return values directly into JSON using the Jackson library.</p>
      <h3>2. Separation of Concerns with DTOs</h3>
      <p>Never expose database entity models directly over HTTP APIs. Use Record classes or Data Transfer Objects (DTOs) with Jakarta Validation annotations to enforce input boundaries before business logic executes.</p>
    `,
    takeaways: [
      'Always validate incoming HTTP payloads with Jakarta Validation annotations.',
      'Use proper HTTP response status codes: 201 Created, 200 OK, 400 Bad Request, 404 Not Found.',
      'Centralize error handling with @ControllerAdvice and RFC 7807 ProblemDetails.'
    ],
    faqs: [
      { question: 'Why use Records for DTOs in modern Java?', answer: 'Records offer immutable, concise data carriers with auto-generated constructors, getters, equals, and hashCode.' }
    ]
  },

  // ================= PYTHON TUTORIALS =================
  {
    id: 'python-oop',
    url: '/tutorials/python/oop-concepts/',
    category: 'Python',
    categoryUrl: '/courses/python/index.html',
    title: 'Python Object-Oriented Programming (OOP): Classes, Dunder & MRO',
    h1: 'Python OOP Deep Dive: Classes, Encapsulation, Magic Methods & MRO',
    metaDescription: 'Master Object-Oriented Programming in Python: classes, __init__, encapsulation with property decorators, multiple inheritance, and Method Resolution Order (MRO).',
    code: `class SoftwareCourse:
    def __init__(self, name: str, duration_weeks: int):
        self._name = name  # Protected attribute by convention
        self._duration_weeks = duration_weeks

    @property
    def duration_weeks(self) -> int:
        return self._duration_weeks

    @duration_weeks.setter
    def duration_weeks(self, weeks: int):
        if weeks <= 0:
            raise ValueError("Duration must be a positive integer")
        self._duration_weeks = weeks

    def __str__(self) -> str:
        return f"{self._name} ({self._duration_weeks} Weeks)"

course = SoftwareCourse("Python Full Stack", 14)
print(course)
course.duration_weeks = 16
print("Updated duration:", course.duration_weeks)`,
    explanation: `
      <h3>1. Classes & Instances in Python</h3>
      <p>Python treats classes as first-class objects. The <code>__init__</code> constructor initializes attributes on the newly created instance referenced by <code>self</code>.</p>
      <h3>2. Encapsulation & Property Decorators</h3>
      <p>Python does not enforce private variables at the bytecode level. Instead, the community adheres to naming conventions: single underscore (<code>_var</code>) denotes protected fields, while double underscore (<code>__var</code>) triggers name mangling to prevent subclass collisions. Use <code>@property</code> to implement getters and setters cleanly.</p>
    `,
    takeaways: [
      'Dunder methods like __str__ and __repr__ enable custom string representations and operator overloading.',
      'Python supports multiple inheritance resolved through the C3 Linearization algorithm (MRO).',
      'Prefer dataclasses for simple structured data models.'
    ],
    faqs: [
      { question: 'What is the purpose of self in Python methods?', answer: 'self represents the specific instance of the class upon which a method is called, giving access to instance attributes.' }
    ]
  },
  {
    id: 'python-decorators',
    url: '/tutorials/python/decorators/',
    category: 'Python',
    categoryUrl: '/courses/python/index.html',
    title: 'Python Decorators Explained: Execution Timing & Wrappers with Functools',
    h1: 'Mastering Python Decorators: Closures, Function Wrappers & Timing Metrics',
    metaDescription: 'Complete tutorial on writing custom Python decorators: first-class functions, inner wrappers, functools.wraps, and execution timing benchmarks.',
    code: `import time
from functools import wraps

def execution_timer(func):
    """Measures execution duration of the decorated function."""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.perf_counter()
        result = func(*args, **kwargs)
        duration = time.perf_counter() - start_time
        print(f"[{func.__name__}] completed in {duration:.6f} seconds")
        return result
    return wrapper

@execution_timer
def process_large_dataset(n: int):
    return sum(i * i for i in range(n))

process_large_dataset(1_000_000)`,
    explanation: `
      <h3>1. Functions as First-Class Citizens</h3>
      <p>In Python, functions can be assigned to variables, passed as arguments, and returned from other functions. A decorator is simply a function that accepts another function as an argument, adds behavior, and returns the modified function.</p>
      <h3>2. Preserving Function Metadata with functools.wraps</h3>
      <p>When wrapping a function, its original <code>__name__</code> and docstring are obscured by the wrapper function. Applying <code>@wraps(func)</code> preserves the original function's introspection metadata, which is crucial for debugging and testing frameworks.</p>
    `,
    takeaways: [
      'Decorators provide clean, reusable aspect-oriented functionality such as logging, authentication, and caching.',
      'Always use @wraps from the functools module inside your custom decorators.',
      'Decorators can also take configuration arguments by adding an extra outer wrapper layer.'
    ],
    faqs: [
      { question: 'What is the @ syntax shorthand for?', answer: '@decorator above def my_func() is exact syntactic sugar for my_func = decorator(my_func).' }
    ]
  },
  {
    id: 'pandas-basics',
    url: '/tutorials/python/pandas-basics/',
    category: 'Python',
    categoryUrl: '/courses/data-science/index.html',
    title: 'Pandas for Data Science Tutorial: DataFrames, Filtering, GroupBy & Cleaning',
    h1: 'Pandas Data Analysis Tutorial: DataFrames, Aggregations & Missing Data',
    metaDescription: 'Hands-on Pandas tutorial for data analysts: read_csv, Boolean filtering, handling NaN values, groupby aggregations, and export operations.',
    code: `import pandas as pd

# Creating a DataFrame from raw dictionary records
data = {
    'Course': ['Java', 'Python', 'Data Science', 'MERN', 'SEO'],
    'Enrollments': [120, 145, 110, 95, 80],
    'Fee': [25000, 22000, 35000, 28000, 18000]
}
df = pd.DataFrame(data)

# Filter courses with enrollments over 100
popular_courses = df[df['Enrollments'] > 100]
print("Popular Courses:\\n", popular_courses)

# Compute descriptive revenue metric
df['TotalRevenue'] = df['Enrollments'] * df['Fee']
print("Summary Statistics:\\n", df[['Enrollments', 'TotalRevenue']].describe())`,
    explanation: `
      <h3>1. Series and DataFrames</h3>
      <p>Pandas is built on two core data structures: <code>Series</code> (1-dimensional labeled array) and <code>DataFrame</code> (2-dimensional tabular structure with labeled axes). It utilizes NumPy under the hood for fast vectorized C computations.</p>
      <h3>2. Data Cleaning & Aggregation Workflows</h3>
      <p>Real-world datasets contain missing values and incorrect data types. Pandas provides robust utilities like <code>isna()</code>, <code>fillna()</code>, <code>dropna()</code>, and type conversion with <code>astype()</code>. Aggregation through <code>groupby()</code> enables multi-dimensional group-level summaries.</p>
    `,
    takeaways: [
      'Avoid looping with iterrows(); always leverage vectorized Pandas operations for 100x faster execution.',
      'Use .loc for label-based indexing and .iloc for integer position-based slicing.',
      'Inspect DataFrame dimensions and memory usage with df.info() and df.shape.'
    ],
    faqs: [
      { question: 'Why is Pandas preferred over basic Python lists for data manipulation?', answer: 'Pandas performs operations in compiled C/NumPy arrays, making calculations vastly faster and memory-efficient.' }
    ]
  },

  // ================= WEB & JS TUTORIALS =================
  {
    id: 'javascript-event-loop',
    url: '/tutorials/web/javascript-event-loop/',
    category: 'Web',
    categoryUrl: '/courses/javascript/index.html',
    title: 'The JavaScript Event Loop Explained: Call Stack, Microtasks & Macrotasks',
    h1: 'Understanding the JavaScript Event Loop & Asynchronous Execution',
    metaDescription: 'Understand how single-threaded JavaScript handles asynchronous operations: Call Stack, Web APIs, Microtask queue (Promises), and Macrotask queue (setTimeout).',
    code: `console.log("1: Synchronous start");

setTimeout(() => {
    console.log("4: Macrotask callback (setTimeout)");
}, 0);

Promise.resolve().then(() => {
    console.log("3: Microtask callback (Promise)");
});

console.log("2: Synchronous end");

// Output Order:
// 1: Synchronous start
// 2: Synchronous end
// 3: Microtask callback (Promise)
// 4: Macrotask callback (setTimeout)`,
    explanation: `
      <h3>1. The Single-Threaded Nature of JavaScript</h3>
      <p>JavaScript has a single call stack and executes one command at a time. It delegates long-running tasks like timers, network requests, and DOM events to browser Web APIs.</p>
      <h3>2. Microtasks vs. Macrotasks</h3>
      <p>When an asynchronous operation finishes, its callback enters one of two queues:</p>
      <ul>
        <li><strong>Microtask Queue:</strong> Holds Promise callbacks (<code>.then</code>, <code>async/await</code>) and MutationObservers.</li>
        <li><strong>Macrotask (Task) Queue:</strong> Holds callbacks from <code>setTimeout</code>, <code>setInterval</code>, and I/O events.</li>
      </ul>
      <p>Crucially, the Event Loop drains the <strong>entire Microtask queue</strong> before moving on to the next Macrotask.</p>
    `,
    takeaways: [
      'Promises always resolve before setTimeout callbacks even with a 0ms delay.',
      'Heavy computational loops block the Call Stack and freeze the browser UI.',
      'Use Web Workers for heavy CPU-bound processing without degrading UI responsiveness.'
    ],
    faqs: [
      { question: 'Why does setTimeout(fn, 0) not run immediately?', answer: 'Because it is placed in the task queue and must wait until the current call stack and all microtasks have completely drained.' }
    ]
  },
  {
    id: 'closures-in-javascript',
    url: '/tutorials/web/closures-in-javascript/',
    category: 'Web',
    categoryUrl: '/courses/javascript/index.html',
    title: 'Closures in JavaScript Explained: Practical Use Cases & Memory Nuances',
    h1: 'JavaScript Closures: Lexical Scoping, Encapsulation & Memory Lifecycle',
    metaDescription: 'Master closures in JavaScript: lexical scope, function factories, data encapsulation, private variables, and memory management.',
    code: `function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private state protected by closure

    return {
        deposit(amount) {
            if (amount > 0) balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) balance -= amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(5000);
account.deposit(2500);
console.log("Balance:", account.getBalance()); // 7500
// balance variable is inaccessible directly from global scope!`,
    explanation: `
      <h3>1. What is a Closure?</h3>
      <p>A closure is the combination of a function bundled together with references to its surrounding lexical environment. In JavaScript, closures are created every time a function is created at function creation time.</p>
      <h3>2. Data Encapsulation & Private Variables</h3>
      <p>Before ES2022 private class fields (<code>#field</code>), closures were the primary mechanism for implementing data hiding and private variables in JavaScript software design.</p>
    `,
    takeaways: [
      'A closure retains access to outer variables even after the outer function has returned.',
      'Closures enable module patterns, currying, and memoization techniques.',
      'Beware of unintentionally retaining large objects in closures, which can lead to memory retention.'
    ],
    faqs: [
      { question: 'Do closures consume more memory?', answer: 'Yes, variables referenced by an active closure cannot be garbage collected while the inner function remains reachable.' }
    ]
  },

  // ================= DATABASE & SQL TUTORIALS =================
  {
    id: 'sql-joins-explained',
    url: '/tutorials/database/sql-joins-explained/',
    category: 'Database',
    categoryUrl: '/courses/sql/index.html',
    title: 'SQL Joins Explained: INNER, LEFT, RIGHT, and FULL OUTER JOIN with Diagrams',
    h1: 'Visual Guide to SQL Joins: Query Syntax, Venn Logic & Performance',
    metaDescription: 'Master relational SQL joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and self-joins with realistic examples.',
    code: `-- Practical SQL Join: Combining Students with Enrollment and Course Data
SELECT 
    s.student_id,
    s.full_name,
    c.course_name,
    e.enrollment_date
FROM students s
INNER JOIN enrollments e ON s.student_id = e.student_id
LEFT JOIN courses c ON e.course_id = c.course_id
WHERE e.status = 'ACTIVE'
ORDER BY e.enrollment_date DESC;`,
    explanation: `
      <h3>1. Relational Mechanics of SQL Joins</h3>
      <p>Relational databases normalize data across discrete tables to avoid redundancy. Joins combine related rows across tables based on common keys (Foreign Keys referencing Primary Keys).</p>
      <h3>2. Join Types Comparison</h3>
      <ul>
        <li><strong>INNER JOIN:</strong> Returns rows that have matching values in both tables.</li>
        <li><strong>LEFT (OUTER) JOIN:</strong> Returns all rows from the left table and matched records from the right; unmatched right fields return NULL.</li>
        <li><strong>FULL OUTER JOIN:</strong> Returns all records when there is a match in either left or right table.</li>
      </ul>
    `,
    takeaways: [
      'Always ensure join predicate columns (ON clause) have B-Tree indexes for fast lookups.',
      'Avoid joining on unindexed string fields or expressions.',
      'Use EXPLAIN to inspect whether the query planner uses Nested Loop, Hash Join, or Merge Join.'
    ],
    faqs: [
      { question: 'What is the performance difference between INNER and LEFT JOIN?', answer: 'INNER JOIN allows the query planner more flexibility to reorder join operations, often yielding faster execution than an outer join.' }
    ]
  },
  {
    id: 'mysql-indexing-strategies',
    url: '/tutorials/database/mysql-indexing-strategies/',
    category: 'Database',
    categoryUrl: '/courses/mysql/index.html',
    title: 'MySQL Indexing Strategies: B-Tree Internals, Composite Indexes & EXPLAIN',
    h1: 'MySQL Indexing Masterclass: B-Tree Mechanics, Composite Indexes & Tuning',
    metaDescription: 'Accelerate slow database queries in MySQL: B-Tree structure, Clustered vs Secondary indexes, Leftmost prefix rule, and EXPLAIN query plan analysis.',
    code: `-- Creating an optimal composite index for student search queries
CREATE INDEX idx_student_status_city 
ON students (status, city, enrollment_year);

-- Analyzing query execution plan
EXPLAIN ANALYZE 
SELECT full_name, email 
FROM students 
WHERE status = 'ACTIVE' AND city = 'Ghaziabad'
ORDER BY enrollment_year DESC;`,
    explanation: `
      <h3>1. How B-Tree Indexes Work</h3>
      <p>In MySQL InnoDB, data is stored in 16KB pages structured as a balanced B+ Tree. An index allows the storage engine to perform logarithmic binary traversals to find rows without scanning the entire table sequentially.</p>
      <h3>2. The Leftmost Prefix Rule</h3>
      <p>For composite indexes across multiple columns <code>(A, B, C)</code>, the index can accelerate queries filtering by <code>(A)</code>, <code>(A, B)</code>, or <code>(A, B, C)</code>, but <em>cannot</em> be used if the query only filters by <code>(B)</code> or <code>(C)</code>.</p>
    `,
    takeaways: [
      'InnoDB primary keys form the Clustered Index; rows are physically ordered by the primary key.',
      'Secondary indexes store the primary key value as their pointer to the row.',
      'Do not over-index; each index adds write overhead to INSERT, UPDATE, and DELETE queries.'
    ],
    faqs: [
      { question: 'What does "Using filesort" mean in an EXPLAIN plan?', answer: 'It indicates MySQL cannot use an index to satisfy an ORDER BY clause and must sort rows in an extra memory buffer.' }
    ]
  },

  // ================= DEVOPS TUTORIALS =================
  {
    id: 'docker-containers-explained',
    url: '/tutorials/devops/docker-containers-explained/',
    category: 'DevOps',
    categoryUrl: '/courses/docker/index.html',
    title: 'What is Docker? Containers vs Virtual Machines & Multi-Stage Builds',
    h1: 'Docker Explained: Containerization, Namespaces, Cgroups & Multi-Stage Builds',
    metaDescription: 'Comprehensive Docker guide: kernel namespaces, cgroups, layered image filesystems, writing optimized multi-stage Dockerfiles for Java and Node.',
    code: `# Multi-stage Dockerfile for Spring Boot Application
# Stage 1: Build JAR using Maven
FROM maven:3.9-eclipse-temurin-21-alpine AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Minimal Production JRE Image
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
USER 1000:1000
ENTRYPOINT ["java", "-jar", "app.jar"]`,
    explanation: `
      <h3>1. Containers vs. Virtual Machines</h3>
      <p>A Virtual Machine runs a full guest operating system on top of a hypervisor, consuming gigabytes of memory and requiring minutes to boot. Docker containers share the host Linux kernel, isolating processes using two fundamental Linux kernel features:</p>
      <ul>
        <li><strong>Namespaces:</strong> Isolate view of system resources (PID, NET, MNT, IPC, UTS).</li>
        <li><strong>Control Groups (cgroups):</strong> Meter and limit hardware consumption (CPU, RAM, I/O bandwidth).</li>
      </ul>
      <h3>2. The Power of Multi-Stage Builds</h3>
      <p>Multi-stage builds allow developers to compile source code in a heavy build environment with compilers and SDKs, then copy only the compiled binary into a lightweight production runtime image, reducing image size from 800MB to under 120MB.</p>
    `,
    takeaways: [
      'Docker images use immutable, cached layers; order Dockerfile steps from least-frequently changed to most-frequently changed.',
      'Never run container processes as root; declare a dedicated non-root USER.',
      'Multi-stage builds dramatically shrink attack surface and download times.'
    ],
    faqs: [
      { question: 'What is the difference between CMD and ENTRYPOINT?', answer: 'ENTRYPOINT sets the primary executable to run, while CMD provides default parameters that can be overridden by arguments passed to docker run.' }
    ]
  },

  // ================= SEO TUTORIALS =================
  {
    id: 'technical-seo-checklist',
    url: '/tutorials/seo/technical-seo-checklist/',
    category: 'SEO',
    categoryUrl: '/courses/seo/index.html',
    title: 'Technical SEO Checklist: Crawling, Indexing, Canonicalization & Core Web Vitals',
    h1: 'The Comprehensive Technical SEO Audit & Implementation Checklist',
    metaDescription: 'Step-by-step Technical SEO guide: robots.txt syntax, XML sitemaps, canonical tags, 301 redirects, Schema markup, and Core Web Vitals diagnostics.',
    code: `<!-- Essential Technical SEO Metadata Block -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Descriptive Topic Title | Primary Entity Target</title>
  <meta name="description" content="Unique, compelling 150-160 character description matching search intent.">
  <link rel="canonical" href="https://programmingwala.com/canonical-url/">
  
  <!-- Structured Data JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Java Full Stack Development",
    "description": "Comprehensive enterprise Java training at RDC Ghaziabad.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Appletree Infotech",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C-60 R.K Tower, 3rd Floor, RDC, Ghaziabad"
      }
    }
  }
  </script>
</head>`,
    explanation: `
      <h3>1. The Crawl and Index Foundation</h3>
      <p>Before content can rank, search engine crawlers must discover, render, and index it without encountering technical blockers. A proper technical setup ensures search bots efficiently allocate crawl budget to high-value educational URLs.</p>
      <h3>2. Key Technical Audit Checkpoints</h3>
      <ul>
        <li><strong>robots.txt Integrity:</strong> Ensure critical CSS, JavaScript, and canonical pages are not inadvertently blocked via Disallow rules.</li>
        <li><strong>XML Sitemap Health:</strong> Submit clean, non-redirected 200 OK canonical URLs in your sitemap.xml.</li>
        <li><strong>Canonicalization:</strong> Point self-referencing canonical tags to avoid duplicate content penalties between HTTP/HTTPS, trailing slashes, and parameter URLs.</li>
        <li><strong>Core Web Vitals:</strong> Maintain fast LCP (&lt; 2.5s) using optimized fonts, lightweight SVG graphics, and responsive images.</li>
      </ul>
    `,
    takeaways: [
      'Never block rendering assets (CSS/JS) in robots.txt; Googlebot needs them to render the DOM.',
      'Canonical URLs must be absolute and point to the single primary version of the document.',
      'Inspect coverage status directly in Google Search Console to fix 404 or redirect errors.'
    ],
    faqs: [
      { question: 'Why does Google Search Console report "Discovered - currently not indexed"?', answer: 'It means Google has identified the URL but chose not to crawl or index it yet, typically due to server capacity limits or low perceived content uniqueness.' }
    ]
  }
];

module.exports = { TUTORIALS };
