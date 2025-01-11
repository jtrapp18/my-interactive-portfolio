const data = {
    languages: [
        'Python',
        'Flask',
        'React',
        'JavaScript',
        'SQL',
        'CSS',
        'HTML',
        'VBA'
    ],
    projects: [
        {
            id: 1,
            name: "Curriculum Management Dashboard",
            phase: "I",
            summary: "Single-page application designed to simplify the management of English study curriculums. Teachers can easily track assignments, grades, and student progress while curating their book lists.",
            languages: ["CSS", "HTML", "JavaScript"],
            collaborators: [
                {
                    id: 1,
                    name: "Elchonon Klafter",
                    link: "https://github.com/klaftech"
                }
            ],
            features: [
                "Access & search database of all published books to add to curriculum.",
                "Allows easy management of active curriculum and assignments.",
                "Create and edit assignments for each book.",
                "Track and analyze student's grades and progress across entire class.",
                "Integrated with OpenLibrary API to load, search and filter published books and retrieve cover images.",
                "Connects to local database to store and retrieve curriculum, assignments, students and grades through a RESTful API hosted on Railway.",
                "Listens for user events and updates the DOM in response.",
                "Allows simple drag and drop adding of books to the curriculum.",
                "Features highly interactive forms for easy data manipulation."
            ],
            technical: [
            ],
            image: "images/projects/curriculum-mgmt.png",
            gif: "images/projects/curriculum-mgmt.gif",
            website_link: "https://jtrapp18.github.io/english-study-curriculum-mgmt/",
            readme: "https://raw.githubusercontent.com/jtrapp18/english-study-curriculum-mgmt/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/english-study-curriculum-mgmt",
            repo_be: "https://github.com/jtrapp18/english-study-curriculum-mgmt-be"
        },
        {
            id: 2,
            name: "Wandr Personal Travel Journal",
            phase: "II",
            summary: "A React-based application designed for documenting travels, creating itineraries, leaving reviews, and tracking visited destinations.",
            languages: ["CSS", "React"],
            collaborators: [
                {
                    id: 1,
                    name: "Kelsey Roche",
                    link: "https://github.com/kelseyroche"
                }
            ],
            features: [
                "Login and logout functionality.",
                "Plan trips and save itineraries for destinations.",
                "Add reviews with photos to share your travel experiences.",
                "Locate trips using search and filter functionality.",
                "Utilizes AcuWeather API to view weather forecast for upcoming trips.",
                "Saves data to database stored in back-end API, hosted on Railway."
            ],
            technical: [
            ],
            image: "images/projects/wandr-personal-travel-journal.png",
            gif: "images/projects/wandr-personal-travel-journal.gif",
            website_link: "https://jtrapp18.github.io/wandr-personal-travel-journal/",
            readme: "https://raw.githubusercontent.com/jtrapp18/wandr-personal-travel-journal/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/wandr-personal-travel-journal",
            repo_be: "https://github.com/jtrapp18/wandr-personal-travel-journal-be"
        },
        {
            id: 3,
            name: "Rental Management Tool",
            phase: "III",
            summary: ".",
            languages: ["Python"],
            collaborators: [
            ],
            features: [
                "Add, view, update, and delete rental units, tenants, expenses, and payment records.",
                "Automatically generates and prints receipts for payments linked to specific tenants.",
                "Provides a monthly rollforward showing amounts due for each tenant, including a full payment history.",
                "Generates and prints a PDF income report summarizing both aggregate results and individual unit performance for a specified year.",
                "Implements a tree structure using Node instances to provide dynamic, multi-level menu navigation with parent-child relationships.",
                "Each Node can trigger user-defined procedures, allowing for dynamic operations like filtering tenants or viewing payment details.",
                "Built with MenuTree and Node classes, enabling an expandable, user-friendly navigation structure.",
                "A command-line interface enhanced with rich text formatting and custom ASCII art for improved user experience.",
                "Easily extend the menu system to support future features and operations like tenant or payment management.",
                "Manages database interactions for creating, reading, updating, and deleting records, with SQL (SQLite or chosen database).",
                "Ensures that only valid data is entered into the system with custom validation functions for key attributes."
            ],
            technical: [
            ],
            image: "images/projects/rental_management_tool.png",
            gif: "images/projects/rental_management_tool.gif",
            website_link: "https://github.com/jtrapp18/rental_management_tool",
            readme: "https://raw.githubusercontent.com/jtrapp18/rental_management_tool/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/rental_management_tool",
            repo_be: null
        }
    ],
    relevantWork: [
        {
            id: 1,
            name: "Project Management Tool 'Portal'",
            summary: "A management tool utilized by the company on a daily basis to track task progress, view client and plan information, and automate mass data requests.",
            languages: ["SQL", "MS Access", "VBA"],
            features: [
                "Manage client information, including contact details and plan specifics.",
                "Track and manage plan details and their status updates.",
                "Link and track individual user tasks, including regular updates and task status.",
                "Filter and sort status tracking data based on multiple user-defined criteria.",
                "Automate generation of mass emails for data requests and draft them in Outlook for review."
            ],
            technical: [
            ],
            year: 0,
            company: "The Benefit Practice",
            areas: ["Pension"],
            image: null
        },
        {
            id: 2,
            name: "Pension Liability Valution",
            summary: "In-house pension funding valuation tool built in Excel, utilizing VBA to generate both current and projected pension liabilities on an individual basis for a given year.",
            languages: ["VBA", "MS Excel"],
            features: [
                "Project current and future pension liabilities for multiple plan types, including Unit Accrual, Final Average Salary, and Cash Balance plans.",
                "Generate year-end FASB Disclosures for pension liabilities."
            ],
            technical: [
            ],
            year: 0,
            company: "The Benefit Practice",
            areas: ["Pension"],
            image: null
        },
        {
            id: 3,
            name: "Projected Pension Liabilities",
            summary: "Project seriatim-level projected 401-k expenses for hypothetical client retirement plan",
            languages: ["Python"],
            features: [
                "Calculate rollforward projections for multiple investment accounts within a hypothetical 401(k) plan."
            ],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Consulting"],
            image: "images/projects/curriculum-mgmt.png"
        },
        {
            id: 4,
            name: "VA Lapse Experience Study for Audit",
            summary: "Generates a VA lapse experience study based on actual client data to assess the reasonability of client lapse assumptions for year-end audits.",
            languages: ["Python"],
            features: [
                "Uses scikit-learn to fit client data to logistic regression, random forest, and neural network models.",
                "Evaluates and compares models to select the best-performing one based on pre-determined metrics.",
                "Performs comprehensive data validation and diagnostic checks on client experience data.",
                "Generates exploratory analysis graphs to visually assess client data quality.",
                "Compares client data to PwC-produced benchmarks using visualization tools.",
                "Automates PDF report generation, consolidating graphs and findings into a standardized format.",
                "Reads and writes client data to AWS S3 storage for secure and scalable access.",
                "Utilizes Streamlit to present results and allows users to download reports directly from the interface."
            ],
            technical: [
            ],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Audit"],
            image: "images/projects/curriculum-mgmt.png"
        },
        {
            id: 5,
            name: "Assumption Inventory",
            summary: "MS Access-based database with custom front-end functionality to track and manage actuarial assumptions for life insurance models, improving accuracy and accessibility.",
            languages: ["VBA", "SQL", "MS Access"],
            features: [
                "Tracks actuarial assumptions across multiple life insurance models."
            ],
            technical: [
            ],
            year: 0,
            company: "Knights of Columbus",
            areas: ["Life Insurance"],
            image: "images/projects/curriculum-mgmt.png"
        },
    ],
    aboutMe: [
        {
            id: 1,
            label: "about",
            image: "images/me_coding.jpg",
            tagline: "I'm a life insurance actuary who loves to code.",
            details: `Over the years, I’ve worked in pension consulting, life insurance, auditing, and consulting. In every role, I’ve made it my mission to spot inefficiencies and develop automated solutions to streamline processes.
            
            My goal is to bridge the gap between actuarial work and technology, creating tools that eliminate tedious, manual tasks. That way, experts can focus on what really matters—analyzing data, uncovering insights, and making informed decisions.`
        },
        {
            id: 2,
            label: "background",
            image: null,
            tagline: null,
            details: `During my first job, I worked extensively in Excel and frequently had to tackle repetitive tasks. To streamline my work, I started experimenting with VBA, which quickly sparked my passion for programming. From that point, I sought to incorporate programming into every project where it could be useful.
            
            At work, the majority of my programming experience has involved VBA and Python. However, I've also worked on front-end design in Microsoft Access, as well as projects using Python Streamlit and Power BI.
            
            Recently, I enrolled in a Software Engineering bootcamp at FlatIron School, where I've learned to build applications using JavaScript, React, and Python.`
        }
    ],
    socials: [
        {
            id: 1,
            name: "LinkedIn",
            image: "LI-Black.png",
            link: "https://www.linkedin.com/in/jacqueline-trapp-065a936b"
        },
        {
            id: 2,
            name: "Github",
            image: "github-mark.png",
            link: "https://github.com/jtrapp18"
        },
        {
            id: 3,
            name: "Hashnode",
            image: "hashnode_black.png",
            link: "https://hashnode.com/672903e59b3903ff579fbdcd/dashboard"
        }
    ]
}

export default data;