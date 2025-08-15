// Timetable data and application logic

const studentDataA = [
  { no: 1, reg: "42224210001", name: "SAMEER GOSWAMI" }, { no: 2, reg: "42224210002", name: "AKSHAY" },
  { no: 3, reg: "42224210003", name: "KRISHNA KHANDELWAL" }, { no: 4, reg: "42224210004", name: "RONIT CHUGH" },
  { no: 5, reg: "42224210005", name: "MILAN DHAMA" }, { no: 6, reg: "42224210006", name: "SNEHA SHARMA" },
  { no: 7, reg: "42224210007", name: "TANYA BEHL" }, { no: 8, reg: "42224210008", name: "UDIT PANDEY" },
  { no: 9, reg: "42224210009", name: "MANAV ARYA" }, { no: 10, reg: "42224210010", name: "SHUBHAM DANGI" },
  { no: 11, reg: "42224210011", name: "SHIVANK DANGI" }, { no: 12, reg: "42224210012", name: "TEESHA ARORA" },
  { no: 13, reg: "42224210013", name: "ROSHAN SHARMA" }, { no: 14, reg: "42224210014", name: "SAGAR SHARMA" },
  { no: 15, reg: "42224210015", name: "SAAD" }, { no: 16, reg: "42224210016", name: "VINEET DHAMA" },
  { no: 17, reg: "42224210017", name: "SAMEER" }, { no: 18, reg: "42224210018", name: "ANISHA" },
  { no: 19, reg: "42224210019", name: "RISHABH" }, { no: 20, reg: "42224210020", name: "MUSKAN" },
  { no: 21, reg: "42224210021", name: "MEHAK" }, { no: 22, reg: "42224210022", name: "ANSH GAUTAM" },
  { no: 23, reg: "42224210023", name: "DAKSH DAHIYA" }, { no: 24, reg: "42224210024", name: "ASHWANI" },
  { no: 25, reg: "42224210025", name: "PARAS" }, { no: 26, reg: "42224210026", name: "Tanuj Phougat" },
  { no: 27, reg: "42224210027", name: "KRISH" }, { no: 28, reg: "42224210028", name: "ANUSH" },
  { no: 29, reg: "42224210029", name: "YASH" }, { no: 30, reg: "42224210030", name: "DIVYANSHU" },
  { no: 31, reg: "42224210031", name: "MOHIT NAIN" }, { no: 32, reg: "42224210032", name: "ISHA" },
  { no: 33, reg: "42224210033", name: "NIRBHAY CHAUHAN" }, { no: 34, reg: "42224210034", name: "VANSH KHATRI" },
  { no: 35, reg: "42224210035", name: "DEEPAK ROHILLA" }, { no: 36, reg: "42224210036", name: "KESHAR SHARMA" },
  { no: 37, reg: "42224210037", name: "SUSHANT" }, { no: 38, reg: "42224210038", name: "YASH" },
  { no: 39, reg: "42224210039", name: "VIPUL KUMAR" }, { no: 40, reg: "42224210040", name: "SHORYA KHAIWAL" },
  { no: 41, reg: "42224210041", name: "MOHAMMAD SHAHID" }, { no: 42, reg: "42224210042", name: "HARSH KUMAR" },
  { no: 43, reg: "42224210043", name: "JAY KUMAR" }, { no: 44, reg: "42224210044", name: "TUSHAR ANTIL" },
  { no: 45, reg: "42224210045", name: "KHUSHI CHAUHAN" }, { no: 46, reg: "42224210046", name: "KUNAL" },
  { no: 47, reg: "42224210047", name: "NIDHI CHAUHAN" }, { no: 48, reg: "42224210048", name: "PARWATI" },
  { no: 49, reg: "42224210049", name: "SASHAKT YADAV" }, { no: 50, reg: "42224210050", name: "MAYANK" },
  { no: 51, reg: "42224210051", name: "ASHUTOSH KARN" }, { no: 52, reg: "42224210052", name: "YASH TYAGI" },
  { no: 53, reg: "42224210053", name: "KISHAN SINGH" }, { no: 54, reg: "42224210054", name: "DEV KUMAR" },
  { no: 55, reg: "42224210055", name: "ALISH DHAMA" }, { no: 56, reg: "42224210056", name: "ATUL" },
  { no: 57, reg: "42224210057", name: "KARTIK" }, { no: 58, reg: "42224210058", name: "KUSHAGRA SINGH RAUTELA" },
  { no: 59, reg: "42224210059", name: "RITIK" }, { no: 60, reg: "42224210060", name: "RISHAV KUMAR" },
  { no: 61, reg: "42224210061", name: "DISHA" }, { no: 62, reg: "42224210062", name: "TUSHAR" },
  { no: 63, reg: "42224210063", name: "SAKET SWAMI" }, { no: 64, reg: "42224210064", name: "HARSHITA NANDAL" },
  { no: 65, reg: "42224210065", name: "PRIYA" }, { no: 66, reg: "42224210066", name: "SANCHI BANSAL" },
  { no: 67, reg: "42224210067", name: "RAGHAV" }, { no: 68, reg: "42224210068", name: "SHITIZ TYAGI" },
  { no: 69, reg: "42224210069", name: "TANISHQ NANDAL" }, { no: 70, reg: "42224210070", name: "YASH RAJ" },
  { no: 71, reg: "42224210071", name: "TANVI" }, { no: 72, reg: "42224210072", name: "DIVYANSHU VERMA" },
  { no: 73, reg: "42224210073", name: "SARTHI" }, { no: 74, reg: "42224210074", name: "YATHARTH GARG" },
  { no: 75, reg: "42224210075", name: "MOHIT JOSHI" }
];

const studentDataB = [
  { no: 1, name: "AYSHA PANDA", reg: "42224210076" }, { no: 2, name: "TUSHAR", reg: "42224210077" },
  { no: 3, name: "KHUSHBOO", reg: "42224210078" }, { no: 4, name: "BHUMI VAID", reg: "42224210079" },
  { no: 5, name: "ANIRUDH JINDAL", reg: "42224210080" }, { no: 6, name: "KUNAL", reg: "42224210081" },
  { no: 7, name: "GAURAV SHARMA", reg: "42224210082" }, { no: 8, name: "ANURADHA GARG", reg: "42224210083" },
  { no: 9, name: "DAKSH", reg: "42224210084" }, { no: 10, name: "LAKSHAY .", reg: "42224210085" },
  { no: 11, name: "DEEPANSHU", reg: "42224210086" }, { no: 12, name: "LOVENISH CHAUHAN", reg: "42224210087" },
  { no: 13, name: "VANSHUL SHARMA", reg: "42224210088" }, { no: 14, name: "ABHISHEK", reg: "42224210089" },
  { no: 15, name: "KRISH KUMAR", reg: "42224210090" }, { no: 16, name: "KARTIKAY DUTT SHARMA", reg: "42224210091" },
  { no: 17, name: "PARINEETA", reg: "42224210092" }, { no: 18, name: "SHUBHAM", reg: "42224210093" },
  { no: 19, name: "MAHIR", reg: "42224210094" }, { no: 20, name: "KHUSHBU CHAUHAN", reg: "42224210095" },
  { no: 21, name: "HARSHIT SOLANKI", reg: "42224210096" }, { no: 22, name: "YASH", reg: "42224210097" },
  { no: 23, name: "VANSH KUMAR", reg: "42224210098" }, { no: 24, name: "ANANT GAUR", reg: "42224210099" },
  { no: 25, name: "ISHANT", reg: "42224210100" }, { no: 26, name: "JATIN LOHCHAB", reg: "42224210101" },
  { no: 27, name: "AKHIL", reg: "42224210102" }, { no: 28, name: "LAKSHAY", reg: "42224210103" },
  { no: 29, name: "KUSHAGAR SINGH", reg: "42224210104" }, { no: 30, name: "HARSHIT", reg: "42224210105" },
  { no: 31, name: "MOHINI", reg: "42224210106" }, { no: 32, name: "HIMANSHU KUMAR", reg: "42224210107" },
  { no: 33, name: "KHUSHI", reg: "42224210108" }, { no: 34, name: "TANISH SHARMA", reg: "42224210109" },
  { no: 35, name: "HUNNY", reg: "42224210110" }, { no: 36, name: "VANSH TYAGI", reg: "42224210111" },
  { no: 37, name: "MOHAMMAD AHSAN NEYAZ", reg: "42224210112" }, { no: 38, name: "VIVEK", reg: "42224210113" },
  { no: 39, name: "BHOOMI", reg: "42224210114" }, { no: 40, name: "MANAV DESWAL .", reg: "42224210115" },
  { no: 41, name: "SHUBHANSHU SAINI", reg: "42224210116" }, { no: 42, name: "PRATIK KUMAR JHA", reg: "42224210117" },
  { no: 43, name: "DAKSH YADAV", reg: "42224210118" }, { no: 44, name: "PIYUSH PAL", reg: "42224210119" },
  { no: 45, name: "VANSH", reg: "42224210120" }, { no: 46, name: "TARUN KHATRI .", reg: "42224210121" },
  { no: 47, name: "HARSH GOYAL", reg: "42224210122" }, { no: 48, name: "ADITYA", reg: "42224210123" },
  { no: 49, name: "RAHUL KUMAR", reg: "42224210124" }, { no: 50, name: "NISHU", reg: "42224210125" },
  { no: 51, name: "IBRAHEEM QAISER BHAT", reg: "42224210126" }, { no: 52, name: "RITIK", reg: "42224210127" },
  { no: 53, name: "STEPHEN WILLIAM", reg: "42224210128" }, { no: 54, name: "PRASHANT PAL", reg: "42224210129" },
  { no: 55, name: "Kunal Rajpal", reg: "42224210130" }, { no: 56, name: "KUSH CHAUHAN", reg: "42224210131" },
  { no: 57, name: "JAI", reg: "42224210132" }, { no: 58, name: "AKSHAT JAIN", reg: "42224210133" },
  { no: 59, name: "DAKSH BALYAN", reg: "42224210134" }, { no: 60, name: "AYUSH", reg: "42224210135" },
  { no: 61, name: "CHIRAG", reg: "42224210136" }, { no: 62, name: "VANSH SHOKEEN", reg: "42224210137" },
  { no: 63, name: "SAKSHI", reg: "42224210138" }, { no: 64, name: "MANAN GULATI", reg: "42224210139" },
  { no: 65, name: "Ayush ", reg: "42224210140" }, { no: 66, name: "TUSHAR GILL", reg: "42224210141" },
  { no: 67, name: "RAHUL", reg: "42224210142" }, { no: 68, name: "RISHIT KHURANA", reg: "42224210143" },
  { no: 69, name: "PRATHAM ", reg: "42224210144" }, { no: 70, name: "ARYAN KUMAR", reg: "42224210145" },
  { no: 71, name: "Yash", reg: "42224210146" }, { no: 72, name: "Ayush", reg: "42224210147" },
  { no: 73, name: "Gautam", reg: "42224210148" }, { no: 74, name: "Shekhar", reg: "42224210149" },
  { no: 75, name: "Chehak ", reg: "42224210150" }, { no: 76, name: "Hardik ", reg: "42224210151" },
  { no: 77, name: "Jaswant", reg: "42224210152" }, { no: 78, name: "Pooja Jat", reg: "42224210153" },
  { no: 79, name: "ADITYA", reg: "42224210154" }
];

const aboutMeData = {
  "Name": "Mohammad Ahsan Neyaz",
  "Reg. No.": "42224210112",
  "Age": "21",
  "Course": "Bachelor of Computer Applications (B.C.A.), 3rd Semester",
  "Section": "3B",
  "Location": "India",
  "Motto": '"Work smart. Stay consistent. Always Keep growing."'
};

const timetableData = {
  "timetable": {
    "MONDAY": { "9:30-10:30": "Sports,Yoga and Fitness", "10:30-11:30": "Sports,Yoga and Fitness", "11:30-12:30": "Data Communication & Networks", "12:30-1:30": "German-I/French-I", "1:30-2:30": "LUNCH", "2:30-3:30": "Electoral Literacy in India", "3:30-4:30": "Env. Studies" },
    "TUESDAY": { "9:30-10:30": "Data Communication & Networks", "10:30-11:30": "Electoral Literacy in India", "11:30-12:30": "Operating Systems Concept", "12:30-1:30": "Env. Studies", "1:30-2:30": "LUNCH", "2:30-3:30": "FREE", "3:30-4:30": "Presentation Skills" },
    "WEDNESDAY": { "9:30-10:30": "Operating Systems Concept", "10:30-11:30": "Database Management Systems", "11:30-12:30": "Env. Studies", "12:30-1:30": "Sports,Yoga and Fitness", "1:30-2:30": "LUNCH", "2:30-3:30": "Data Communication & Networks", "3:30-4:30": "Presentation Skills" },
    "THURSDAY": { "9:30-10:30": "Operating Systems Concept", "10:30-11:30": "Env. Studies", "11:30-12:30": "Data Communication & Networks", "12:30-1:30": "Database Management Systems", "1:30-2:30": "LUNCH", "2:30-3:30": "Electoral Literacy in India", "3:30-4:30": "FREE" },
    "FRIDAY": { "9:30-10:30": "Database Management Systems", "10:30-11:30": "SPSS", "11:30-12:30": "SPSS", "12:30-1:30": "German-I/French-I", "1:30-2:30": "LUNCH", "2:30-3:30": "DBMS LAB", "3:30-4:30": "DBMS LAB" }
  },
  "subjects": {
    "Database Management Systems": { "code": "24BCA301", "name": "Database Management Systems (DBMS)", "faculty": "Dr. Kaleem", "department": "CSE" },
    "Data Communication & Networks": { "code": "24BCA302", "name": "Data Communication and Networks (DCN)", "faculty": "Dr. Syed Mohtashim Mian", "department": "CSE" },
    "Operating Systems Concept": { "code": "24BCA303", "name": "Operating Systems Concept (OS)", "faculty": "Mr. Rachit", "department": "CSE" },
    "DBMS LAB": { "code": "24BCA304", "name": "Database Management Systems Lab (DBMS LAB)", "faculty": "Dr. Kaleem", "department": "CSE", "Lab No.": "N1" },
    "Env. Studies": { "code": "23ESUG201", "name": "Environmental Studies (Env. Studies)", "faculty": "NF", "department": "ENV. SCIENCE" },
    "Electoral Literacy in India": { "code": "24MDCxx", "name": "Electoral Literacy in India (ELI)", "faculty": "Abhishank", "department": "POL.SC." },
    "German-I/French-I": { "code": "23AECxxx", "name": "German-I/French-I", "faculty": "Mr.Sudip Das/Mr.Ashish Verma", "department": "LANGUAGE" },
    "Sports,Yoga and Fitness": { "code": "23VACxxx", "name": "Sports,Yoga and Fitness (SYF)", "faculty": "Ms.Komal", "department": "SPORTS" },
    "Presentation Skills": { "code": "23SS353", "name": "Presentation Skills (PS)", "faculty": "NF-A", "department": "PD" },
    "SPSS": { "code": "23SS303", "name": "Statistical Skills with SPSS (SPSS)", "faculty": "Dr.Rashi Malik", "department": "MBA" }
  },
  "timeSlots": ["9:30-10:30", "10:30-11:30", "11:30-12:30", "12:30-1:30", "1:30-2:30", "2:30-3:30", "3:30-4:30"],
  "days": ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"]
};

const syllabusData = {
  "Database Management Systems": `
    <h4>Unit-1: Introduction To Data And Information</h4>
    <p>Basic Concepts - Data Information, difference between data and information, Records and files,Traditional file - based Systems- File Based Approach- limitation of files Based Approach, Database Approach- characteristics of Database Approach, Database Management Systems (DBMS), Components of DBMS Environment, DBMS Functions and Components, Advantage and Disadvantage of DBMS.</p>
    <h4>Unit-2: Architecture</h4>
    <p>Database System Architecture - Three levels of Architecture, External, Conceptual and Internal Levels, Schemas, Mapping and Instance, Data Independence - Logical and Physical Data Independence. Classification of Database Management System, Centralization and client-Server Architecture to DBMS. Data Models: Records-based Data Models, Object-based data Models, object-based Data Models, physical Data Models and Conceptual Modeling.</p>
    <h4>Unit-3: E-R Modelling</h4>
    <p>Entry-Relationships Models -Entity Types, Entity Sets, Attribute Relationship Types, Relationship Instances and E-R Diagram, Basic Concepts of Hierarchal and network Data Models, difference between relational, hierarchical and network model, Relational Data Model: - Brief History, Relational Model Terminology-Relational Data Structure, Database Relations, Properties of Relations, Keys, Domains, and Integrity Constrains over Relations, Base table and views.</p>
    <h4>Unit-4: Normalization</h4>
    <p>Introduction to Schema Refinement -  Problems caused by redundancy, Decompositions - Problems related to decomposition, Functional Dependencies - Reasoning about FDS,Normal Forms - First, Second,Third Normal forms.</p>
    <h4>Unit-5: Transaction & Recovery</h4>
    <p>Transaction management ACID Properties, Transaction states, Concurrency control: Concurrency Control-Overview, Concurrency control problems, Locks, Locking Protocols, and Deadlocks.</p>
  `,
  "DBMS LAB": `
    <h4>List of Experiments</h4>
    <p>(A Student is suppose to complete/perform minimum 9 experiment)</p>
    <h5>EMPLOYEE Schema</h5>
    <table class="syllabus-table">
      <thead><tr><th>FIELD</th><th>TYPE</th><th>NULL</th><th>KEY</th><th>DEFAULT</th></tr></thead>
      <tbody>
        <tr><td>Eno.</td><td>Char(3)</td><td>NO</td><td>PRI</td><td>NIL</td></tr>
        <tr><td>Ename</td><td>Varchar(50)</td><td>NO</td><td></td><td>NIL</td></tr>
        <tr><td>job_type</td><td>Varchar(50)</td><td>NO</td><td></td><td>NIL</td></tr>
        <tr><td>Manager</td><td>Char(3)</td><td>YES</td><td>FK</td><td>NIL</td></tr>
        <tr><td>Hire_data</td><td>Date</td><td>NO</td><td></td><td>NIL</td></tr>
        <tr><td>Dno.</td><td>Integer</td><td>YES</td><td>FK</td><td>NIL</td></tr>
        <tr><td>Commission</td><td>Decimal(10,2)</td><td>YES</td><td></td><td>NIL</td></tr>
        <tr><td>Salary</td><td>Decimal(7,2)</td><td>NO</td><td></td><td>NIL</td></tr>
      </tbody>
    </table>
    <h5>DEPARTMENT Scheme</h5>
    <table class="syllabus-table">
      <thead><tr><th>FIELD</th><th>TYPE</th><th>NULL</th><th>KEY</th><th>DEFAULT</th></tr></thead>
      <tbody>
        <tr><td>Dno.</td><td>Integer</td><td>NO</td><td>PRI</td><td>NULL</td></tr>
        <tr><td>Dname</td><td>Varchar(50)</td><td>YES</td><td></td><td>NULL</td></tr>
        <tr><td>Location</td><td>Varchar(50)</td><td>YES</td><td></td><td>NEW DELHI</td></tr>
      </tbody>
    </table>
    <ol>
      <li>Query to display Employee Name, job, Hire Date,Employee Number; for each employee with the Employee Number appearing first.</li>
      <li>Query to display unique job from the Employee Table.</li>
      <li>Query to display the Employee Name concatenated by a job separated by a comma.</li>
      <li>Query to display all the data from the Employee Table. Separate each Column by a comma and name the said column as THE_OUTPUT.</li>
    </ol>
  `,
  "Data Communication & Networks": `
    <h4>Unit-1: INTRODUCTION</h4>
    <p>Internet: A brief History; TCP/IP Model; OSI Model; Types of Networks : Local Area Networks, Metropolitan Area Networks, Wide Area Network; Topologies: Bus, Star, Ring, Hybrid, Tree, Complete, Irregular - Topology; Guided and unguided transmission media.</p>
    <h4>Unit-2: DATA LINK LAYERS</h4>
    <p>Data link Layer design issues: Framing, Error Detection & Correction: Checksum, CRC, Hamming codes; Elementary Data link Protocols- Sliding window Protocols; Media access control  Random Access: Aloha, CSMA; Controlled Access: Token Passing, Polling, Reservation; Channelization; Ethernet Standard;</p>
    <h4>Unit-3: NETWORK LAYERS PROTOCOLS</h4>
    <p>IPV4 Addressing  classful and classless, Network Address Translation, IPV4 Packet Format, Circuit Switching, Packet Switching, ARP, RARP, DHCP, ICMP and IGMP.</p>
    <h4>Unit-4: NETWORK ROUTING</h4>
    <p>LAN interconnecting devices: Hubs, Switches, Bridges, Routers, Gateways; Routing and Forwarding, Routing Table, Intra- and inter-domain routing, Distance vector routing, DVR Instability problem and solutions, RIP, Link State Routing, OSPF; Virtual Private Networks;</p>
    <h4>Unit-5: TRANSPORT & APPLICATION LAYER</h4>
    <p>Transmission Control Protocol; 3-way handshaking in TCP; User Datagram Protocol; Congestion control mechanisms; Application Layer: Email  SMTP, POP, IMAP; FTP, NNTP, HTTP, DNS, WWW, Firewall.</p>
  `
};

// ===================================================================================
// ACADEMIC EVENTS - THIS IS WHERE TO ADD EXAMS, ASSIGNMENTS, AND HOLIDAYS
// ===================================================================================
const academicEvents = {
  // --- HOLIDAYS (UPDATED LIST) ---
  "2025-08-09": [{ type: "holiday", remarks: "Raksha bandhan" }],
  "2025-08-15": [{ type: "holiday", remarks: "Independence Day" }],
  "2025-09-05": [{ type: "holiday", remarks: "Milad-un-nabi" }],
  "2025-09-22": [{ type: "holiday", remarks: "Maharaja Agrasen Jayanti" }],
  "2025-09-23": [{ type: "holiday", remarks: "Haryana War heroes Martyrdom Day" }],
  "2025-10-02": [{ type: "holiday", remarks: "Mahatma Gandhi Jayanti/Dussehra" }],
  "2025-10-07": [{ type: "holiday", remarks: "Maharishi Valmiki / Maharaja Ajmidh jayanti" }],
  "2025-10-20": [{ type: "holiday", remarks: "Diwali" }],
  "2025-10-21": [{ type: "holiday", remarks: "Diwali" }],
  "2025-11-05": [{ type: "holiday", remarks: "Guru nanak dev jayanti" }],
  "2025-12-03": [{ type: "holiday", remarks: "Preparatory Leave" }],
  "2025-12-25": [{ type: "holiday", remarks: "Christmas" }],
  "2026-01-01": [{ type: "holiday", remarks: "Semester Break" }],

  // --- EXAMS (EXAMPLES) ---
  /*"2025-09-15": [
    {
      type: "exam",
      name: "Internal Assessment 1",
      subject: "Database Management Systems",
      time: "10:30 AM - 11:30 AM",
      topics: "SQL Joins, Normalization (1NF, 2NF, 3NF)"
    }
  ],

  // --- ASSIGNMENTS (EXAMPLES) ---
  "2025-09-26": [
    {
      type: "assignment",
      subject: "Env. Studies",
      task: "Prepare a report on local water pollution.",
      dueDate: "2025-09-26"
    },
    {
      type: "exam",
      name: "Internal Assessment 1",
      subject: "Database Management Systems",
      time: "10:30 AM - 11:30 AM",
      topics: "SQL Joins, Normalization (1NF, 2NF, 3NF)"
    }
  ]*/
};
// ===================================================================================
// END OF ACADEMIC EVENTS SECTION
// ===================================================================================


let cal_current_date = new Date();
let cal_current_month = cal_current_date.getMonth();
let cal_current_year = cal_current_date.getFullYear();


document.addEventListener('DOMContentLoaded', function () {

  function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-color-scheme', savedTheme);

    themeToggle.addEventListener('click', function () {
      var currentTheme = document.documentElement.getAttribute('data-color-scheme');
      var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-color-scheme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  function getCurrentDay() {
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    return days[new Date().getDay()];
  }

  function updateDateTime() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    document.getElementById('currentTime').innerHTML =
      `${displayHours}:${displayMinutes}<span class="time-seconds">:${displaySeconds}</span> ${ampm}`;
    document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', dateOptions);
  }

  function generateTimetable() {
    const grid = document.getElementById('timetableGrid');
    if (!grid) return;
    grid.innerHTML = '';
    grid.appendChild(Object.assign(document.createElement('div'), { className: 'grid-header', textContent: 'Time/Day' }));
    timetableData.days.forEach(function (day) {
      grid.appendChild(Object.assign(document.createElement('div'), { className: 'grid-header', textContent: formatDayName(day) }));
    });
    timetableData.timeSlots.forEach(function (timeSlot) {
      grid.appendChild(Object.assign(document.createElement('div'), { className: 'grid-time', textContent: timeSlot }));
      timetableData.days.forEach(function (day) {
        const subject = timetableData.timetable[day] && timetableData.timetable[day][timeSlot];
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        let cellText = subject || 'FREE';
        if (subject && window.innerWidth < 768) {
          const subjectDetails = timetableData.subjects[subject];
          if (subjectDetails) {
            const match = subjectDetails.name.match(/\(([^)]+)\)$/);
            if (match) {
              cellText = match[1];
            }
          }
        }
        cell.textContent = cellText;
        cell.setAttribute('data-subject', subject || 'FREE');
        cell.setAttribute('data-time', timeSlot);
        cell.setAttribute('data-day', day);
        if (subject === 'LUNCH') {
          cell.classList.add('lunch');
        } else if (!subject || subject === 'FREE') {
          cell.classList.add('free');
        } else {
          cell.classList.add(subject.indexOf('LAB') > -1 ? 'lab' : 'subject');
          cell.addEventListener('click', function () {
            showModal('subjectModal', { subject: subject, timeSlot: timeSlot, day: day });
          });
        }
        if (day === getCurrentDay()) {
          cell.classList.add('today');
        }
        grid.appendChild(cell);
      });
    });
  }

  function formatDayName(day) {
    return day.charAt(0) + day.slice(1).toLowerCase();
  }

  function showModal(modalId, data) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    populateModalContent(modalId, data);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function hideModal(modalElement) {
    modalElement.classList.add('hidden');
    if (!document.querySelector('.modal:not(.hidden)')) {
      document.body.style.overflow = 'auto';
    }
  }

  function populateModalContent(modalId, data) {
    if (modalId === 'subjectModal') {
      const subjectInfo = timetableData.subjects[data.subject];
      if (!subjectInfo) return;
      document.getElementById('subjectName').textContent = subjectInfo.name;
      document.getElementById('subjectCode').textContent = subjectInfo.code;
      document.getElementById('subjectFaculty').textContent = subjectInfo.faculty;
      document.getElementById('subjectDepartment').textContent = subjectInfo.department;
      document.getElementById('subjectTime').textContent = data.timeSlot;
      document.getElementById('subjectDay').textContent = formatDayName(data.day);
    } else if (modalId === 'studentModal') {
      renderStudentList('B');
    } else if (modalId === 'facultyModal') {
      renderFacultyList();
    } else if (modalId === 'aboutMeModal') {
      const container = document.getElementById('aboutMeContainer');
      container.innerHTML = '';
      for (const key in aboutMeData) {
        if (Object.hasOwnProperty.call(aboutMeData, key)) {
          container.innerHTML += `<div class="detail-row"><span class="detail-label">${key}:</span><span class="detail-value">${aboutMeData[key]}</span></div>`;
        }
      }
    } else if (modalId === 'calendarModal') {
      renderCalendar();
    } else if (modalId === 'syllabusModal') {
      renderSyllabus();
    }
  }

  function renderSyllabus() {
    const modalBody = document.getElementById('syllabusModalBody');
    const subjects = Object.keys(syllabusData);

    let tabsHTML = '<div class="modal-tabs">';
    subjects.forEach((subject, index) => {
      tabsHTML += `<button class="tab-btn ${index === 0 ? 'active' : ''}" data-subject="${subject}">${subject}</button>`;
    });
    tabsHTML += '</div>';

    let contentHTML = '<div class="syllabus-content-container">';
    subjects.forEach((subject, index) => {
      contentHTML += `<div class="syllabus-content ${index === 0 ? 'active' : ''}" data-subject-content="${subject}">${syllabusData[subject]}</div>`;
    });
    contentHTML += '</div>';

    modalBody.innerHTML = tabsHTML + contentHTML;

    modalBody.querySelector('.modal-tabs').addEventListener('click', function (e) {
      if (e.target && e.target.matches('.tab-btn')) {
        const subject = e.target.getAttribute('data-subject');

        modalBody.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        modalBody.querySelectorAll('.syllabus-content').forEach(content => content.classList.remove('active'));
        modalBody.querySelector(`.syllabus-content[data-subject-content="${subject}"]`).classList.add('active');
      }
    });
  }

  function renderStudentList(section) {
    const container = document.getElementById('studentListContainer');
    const data = section === 'A' ? studentDataA : studentDataB;
    var tableHTML = `<table class="student-table"><thead><tr><th>Sl.No.</th><th>Name</th><th>Register No.</th></tr></thead><tbody>`;
    data.forEach(function (s) {
      tableHTML += `<tr><td>${s.no}</td><td>${s.name}</td><td>${s.reg}</td></tr>`;
    });
    tableHTML += `</tbody></table>`;
    container.innerHTML = tableHTML;
    document.querySelectorAll('#studentModal .tab-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-section') === section);
    });
  }

  function renderFacultyList() {
    const container = document.getElementById('facultyListContainer');
    const facultyList = [];
    const uniqueFaculty = {};
    Object.keys(timetableData.subjects).forEach(function (key) {
      var subject = timetableData.subjects[key];
      if (subject.faculty !== 'NF' && subject.faculty !== 'NF-A' && !uniqueFaculty[subject.faculty]) {
        uniqueFaculty[subject.faculty] = { name: subject.faculty, department: subject.department, subjects: [] };
      }
    });
    Object.keys(timetableData.subjects).forEach(function (key) {
      var subject = timetableData.subjects[key];
      if (uniqueFaculty[subject.faculty]) {
        uniqueFaculty[subject.faculty].subjects.push(subject.name.replace(/\s*\(.*\)\s*$/, ''));
      }
    });
    for (var name in uniqueFaculty) {
      facultyList.push(uniqueFaculty[name]);
    }
    facultyList.sort((a, b) => a.name.localeCompare(b.name));
    var tableHTML = `<table class="faculty-table"><thead><tr><th>Faculty Name</th><th>Department</th><th>Subject(s)</th></tr></thead><tbody>`;
    facultyList.forEach(function (f) {
      tableHTML += `<tr><td>${f.name}</td><td>${f.department}</td><td>${f.subjects.join(', ')}</td></tr>`;
    });
    tableHTML += `</tbody></table>`;
    container.innerHTML = tableHTML;
  }

  function renderCalendar() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('calendarTitle').textContent = `${monthNames[cal_current_month]} ${cal_current_year}`;
    const firstDay = new Date(cal_current_year, cal_current_month, 1).getDay();
    const daysInMonth = new Date(cal_current_year, cal_current_month + 1, 0).getDate();
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
      calendarGrid.innerHTML += `<div class="calendar-day-header">${day}</div>`;
    });
    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div></div>`;
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEl = document.createElement('div');
      dayEl.classList.add('calendar-day');
      const dayContent = document.createElement('span');
      dayContent.textContent = day;
      dayEl.appendChild(dayContent);

      const dateKey = `${cal_current_year}-${String(cal_current_month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const events = academicEvents[dateKey];

      if (events && events.length > 0) {
        const dotContainer = document.createElement('div');
        dotContainer.className = 'event-dots-container';
        const eventTypes = new Set(events.map(e => e.type));

        let tooltipHTML = '';

        eventTypes.forEach(type => {
          const dot = document.createElement('div');
          dot.className = `event-dot dot-${type}`;
          dotContainer.appendChild(dot);
        });

        events.forEach(event => {
          tooltipHTML += `<div class="tooltip-event-item item-${event.type}">`;
          if (event.type === 'exam') {
            tooltipHTML += `<strong>${event.name}</strong>`;
            tooltipHTML += `<span>${event.subject} (${event.time})</span>`;
            tooltipHTML += `<small>Topics: ${event.topics}</small>`;
          } else if (event.type === 'assignment') {
            tooltipHTML += `<strong>Assignment Due</strong>`;
            tooltipHTML += `<span>${event.subject}</span>`;
            tooltipHTML += `<small>Task: ${event.task}</small>`;
          } else if (event.type === 'holiday') {
            tooltipHTML += `<strong>Holiday</strong>`;
            tooltipHTML += `<span>${event.remarks}</span>`;
          }
          tooltipHTML += `</div>`;
        });

        dayEl.appendChild(dotContainer);
        dayEl.dataset.tooltipHtml = tooltipHTML;
      }
      if (day === new Date().getDate() && cal_current_month === new Date().getMonth() && cal_current_year === new Date().getFullYear()) {
        dayEl.classList.add('current-day');
      }
      calendarGrid.appendChild(dayEl);
    }
  }

  function bindCalendarEvents() {
    const tooltip = document.getElementById('customTooltip');
    const calendarGrid = document.getElementById('calendarGrid');
    const calendarModal = document.getElementById('calendarModal');
    let activeTooltipTarget = null;

    function showTooltip(target) {
      if (!target.dataset.tooltipHtml) return;

      tooltip.innerHTML = target.dataset.tooltipHtml;
      tooltip.classList.remove('position-top', 'visible');

      tooltip.style.visibility = 'hidden';
      tooltip.style.display = 'block';
      const tooltipHeight = tooltip.offsetHeight;
      tooltip.style.display = '';
      tooltip.style.visibility = '';

      const rect = target.getBoundingClientRect();

      if ((rect.bottom + tooltipHeight + 20) > window.innerHeight) {
        tooltip.style.top = `${rect.top - tooltipHeight - 12}px`;
        tooltip.classList.add('position-top');
      } else {
        tooltip.style.top = `${rect.bottom + 12}px`;
      }

      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.transform = 'translateX(-50%)';
      tooltip.classList.add('visible');
      activeTooltipTarget = target;
    }

    function hideTooltip() {
      tooltip.classList.remove('visible');
      activeTooltipTarget = null;
    }

    // This is the main click handler for both mobile and desktop.
    calendarGrid.addEventListener('click', (e) => {
      // Use .closest() to ensure the entire cell is the target
      const target = e.target.closest('.calendar-day[data-tooltip-html]');
      if (target) {
        if (activeTooltipTarget === target) {
          hideTooltip();
        } else {
          showTooltip(target);
        }
      }
    });

    // Hide the tooltip if you click anywhere else in the modal that isn't the grid.
    calendarModal.addEventListener('click', (e) => {
      if (!e.target.closest('.calendar-grid')) {
        hideTooltip();
      }
    });

    // --- Modal and Navigation Button Events ---
    document.getElementById('dateTimeTrigger').addEventListener('click', function () {
      showModal('calendarModal');
    });
    document.getElementById('prevMonthBtn').addEventListener('click', () => {
      cal_current_month--;
      if (cal_current_month < 0) {
        cal_current_month = 11;
        cal_current_year--;
      }
      renderCalendar();
    });
    document.getElementById('nextMonthBtn').addEventListener('click', () => {
      cal_current_month++;
      if (cal_current_month > 11) {
        cal_current_month = 0;
        cal_current_year++;
      }
      renderCalendar();
    });
  }

  function bindModalEvents() {
    document.querySelectorAll('.modal').forEach(function (modal) {
      const closeBtn = modal.querySelector('.modal-close');
      const overlay = modal.querySelector('.modal-overlay');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () { hideModal(modal); });
      }
      if (overlay) {
        overlay.addEventListener('click', function () { hideModal(modal); });
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal:not(.hidden)').forEach(hideModal);
      }
    });
    const studentModalTabs = document.querySelector('#studentModal .modal-tabs');
    if (studentModalTabs) {
      studentModalTabs.addEventListener('click', function (e) {
        if (e.target && e.target.matches('.tab-btn')) {
          renderStudentList(e.target.getAttribute('data-section'));
        }
      });
    }
  }

  function bindFooterLinks() {
    document.getElementById('totalStudentsLink').addEventListener('click', function (e) {
      e.preventDefault();
      showModal('studentModal');
    });
    document.getElementById('madeByLink').addEventListener('click', function (e) {
      e.preventDefault();
      showModal('aboutMeModal');
    });
    document.getElementById('viewFacultyLink').addEventListener('click', function (e) {
      e.preventDefault();
      showModal('facultyModal');
    });
    document.getElementById('syllabusLink').addEventListener('click', function (e) {
      e.preventDefault();
      showModal('syllabusModal');
    });
  }

  function getCurrentTimeSlot() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const timeSlotsMap = [
      { slot: '9:30-10:30', start: 570, end: 630 }, { slot: '10:30-11:30', start: 630, end: 690 },
      { slot: '11:30-12:30', start: 690, end: 750 }, { slot: '12:30-1:30', start: 750, end: 810 },
      { slot: '1:30-2:30', start: 810, end: 870 }, { slot: '2:30-3:30', start: 870, end: 930 },
      { slot: '3:30-4:30', start: 930, end: 990 }
    ];
    for (var i = 0; i < timeSlotsMap.length; i++) {
      if (currentTime >= timeSlotsMap[i].start && currentTime < timeSlotsMap[i].end) {
        return timeSlotsMap[i].slot;
      }
    }
    return null;
  }

  function updateLiveHighlighting() {
    document.querySelectorAll('.grid-cell.active-period').forEach(function (cell) {
      cell.classList.remove('active-period');
    });
    const currentDay = getCurrentDay();
    const currentSlot = getCurrentTimeSlot();

    if (currentDay && currentSlot && timetableData.days.indexOf(currentDay) > -1) {
      const activeCell = document.querySelector(`.grid-cell[data-day='${currentDay}'][data-time='${currentSlot}']`);
      if (activeCell && !activeCell.classList.contains('lunch') && !activeCell.classList.contains('free')) {
        activeCell.classList.add('active-period');
      }
    }
  }

  // This is where the application starts.
  initTheme();
  updateDateTime();
  generateTimetable();
  bindModalEvents();
  bindFooterLinks();
  bindCalendarEvents();
  updateLiveHighlighting();

  setInterval(updateDateTime, 1000);
  setInterval(updateLiveHighlighting, 60000);
});
