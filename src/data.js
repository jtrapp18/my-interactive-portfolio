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
            id: 5,
            name: "Hive Link",
            phase: "V",
            summary: "A platform for beekeepers to track hive inspections, analyze honey production, predict hive health, and connect with other beekeepers through maps, forums, and events.",
            languages: ["CSS", "React", "Python", "Flask", "SQL"],
            collaborators: [
            ],
            features: [
            ],
            technical: [
            ],
            image: "images/projects/hive-link.png",
            gif: "images/projects/hive-link.gif",
            website_link: "https://hive-link.up.railway.app",
            readme: "https://raw.githubusercontent.com/jtrapp18/hive-link/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/hive-link",
            repo_be: null
        },
        {
            id: 3,
            name: "Rental Management Tool",
            phase: "III",
            summary: "Python-based command-line app designed to manage data pertaining to a rental property business (e.g. tenants, expenses, payments, and units.)",
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
        },
        {
            id: 4,
            name: "J&N Cookies",
            phase: "IV",
            summary: "Online cookie store where users can browse, search for, and filter cookies. Registered users can mangage their accounts, carts, and past orders.",
            languages: ["CSS", "React", "Python", "Flask", "SQL"],
            collaborators: [
            ],
            features: [
            ],
            technical: [
            ],
            image: "images/projects/j-n-cookies.png",
            gif: "images/projects/j-n-cookies.gif",
            website_link: "https://j-n-cookies-production.up.railway.app",
            readme: "https://raw.githubusercontent.com/jtrapp18/j-n-cookies/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/j-n-cookies",
            repo_be: null
        },
        {
            id: 2,
            name: "Wandr Personal Travel Journal",
            phase: "II",
            summary: "React-based application designed for documenting travels, creating itineraries, leaving reviews, and tracking visited destinations.",
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
            id: 1,
            name: "Curriculum Management Dashboard",
            phase: "I",
            summary: "Single-page vanilla Javascript app designed to simplify the management of English study curriculums. Teachers can track assignments and grades, while curating their book lists.",
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
                "Connects to local database to store and retrieve curriculum, assignments, students and grades through an API hosted on Railway.",
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
    ],
    relevantWork: [
        {
            id: 1,
            name: "VA Lapse Experience Study for Audit",
            summary: "Led a team to develop an automated system for generating and analyzing VA lapse experience studies, aimed at assessing client lapse assumptions for year-end audits. The system streamlines data validation, model selection, and reporting, improving audit efficiency and accuracy.",
            languages: ["Python"],
            features: [
                "Automates data validation and standardization across multiple audit clients.",
                "Selects the best predictive model based on AUC test metrics.",
                "Generates exploratory graphs and comparisons to PwC benchmarks.",
                "Stores reports and visualizations in AWS S3 for auditor access.",
                "Provides a Streamlit interface for auditors to review and download reports."
            ],
            technical: [
                "Python (pandas, scikit-learn, Streamlit)",
                "AWS S3 for report storage",
                "Logistic regression, random forest, and neural networks for modeling"
            ],
            year: 2023,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Audit", "Life Insurance"],
            image: "images/projects/curriculum-mgmt.png"
        },
        {
            id: 2,
            name: "Quarterly Audit App",
            summary: "Built a Streamlit tool to automate the quarterly life insurance audit process for FAS 60 and FAS 97 disclosures, improving efficiency and reducing manual data processing.",
            languages: ["Python"],
            features: [
                "Automates data access, calculations, and visualizations for FAS disclosures.",
                "Provides dynamic filtering by year, FAS type, and cohort groups.",
                "Generates PDF and Excel reports, stored in AWS S3 for audit teams to access through the UI."
            ],
            technical: [
                "Python (pandas, numpy, Streamlit)",
                "AWS S3 for file storage",
                "PDF and Excel report generation"
            ],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Audit", "Life Insurance"],
            image: null
        },
        {
            id: 3,
            name: "Pension Liability Valuation Tool",
            summary: "Developed a VBA-based pension liability valuation tool to automate complex actuarial calculations, enhance data accuracy, and improve user experience. This tool streamlined the generation of year-end financial disclosures and facilitated participant-level liability analysis.",
            languages: ["VBA"],
            features: [
                "Automates pension liability calculations for multiple plan types.",
                "Uses VBA forms for data input, validation, and workflow management.",
                "Generates year-end disclosure liabilities."
            ],
            technical: [
                "VBA (Excel macros and forms)",
                "Automated pension liability calculations",
                "Data validation and workflow management"
            ],
            year: 2023,
            company: "The Benefit Practice",
            areas: ["Pension", "Consulting"],
            image: null
        },
        {
            id: 4,
            name: "Project Management Tool 'Portal'",
            summary: "Developed a comprehensive project management tool using VBA and MS Access to automate task tracking, manage client and plan data, and improve communication within the organization. The tool significantly streamlined administrative processes and enhanced data management and accessibility.",
            languages: ["SQL", "VBA"],
            features: [
                "Automates client and task tracking with SQL-backed data storage.",
                "Integrates mass email generation via Outlook for client communication.",
                "Provides a centralized repository for plan details and company resources."
            ],
            technical: [
                "SQL (MS Access database)",
                "VBA (for automation and Outlook email integration)"
            ],
            year: 2023,
            company: "The Benefit Practice",
            areas: ["Pension", "Consulting"],
            image: null
        },
        {
            id: 5,
            name: "Assumption Inventory",
            summary: "Developed an MS Access-based database with custom front-end functionality to track and manage metadata related to actuarial assumptions for life insurance models, centralizing key details such as assumption names, locations, and review schedules for improved accessibility and coordination.",
            languages: ["SQL", "VBA"],
            features: [
                "Centralizes actuarial assumption metadata for easy tracking and updates.",
                "Uses MS Access forms and SQL queries for efficient data management.",
                "Includes a scheduling feature for assumption review meetings."
            ],
            technical: [
                "SQL (MS Access queries)",
                "VBA (form-based UI)",
                "Automated scheduling and reporting"
            ],
            year: 2020,
            company: "Knights of Columbus",
            areas: ["Life Insurance"],
            image: "images/projects/curriculum-mgmt.png"
        }        
    ],
    otherContributions: [
        {
            id: 1,
            name: "Proxy Model Development for Client",
            summary: "Contributed to the development of a scalable proxy model for projecting income statements, combining actuarial model results with a machine learning approach to estimate future liabilities, improving the model's precision.",
            languages: ["Python"],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Consulting", "Actuarial", "Machine Learning"],
            image: null
        },
        {
            id: 2,
            name: "Recalculation of Client Logistic Regression Model",
            summary: "Recreated a client's logistic regression model in Python to validate their assumption development process for audit, identifying potential discrepancies and providing insights into model reliability.",
            languages: ["Python"],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Audit", "Actuarial", "Consulting"],
            image: null
        },
        {
            id: 3,
            name: "Projected Pension Liabilities",
            summary: "Project seriatim-level projected 401-k expenses for hypothetical client retirement plan",
            languages: ["Python"],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Consulting"],
            image: null
        }
    ],
    aboutMe: [
        {
            id: 1,
            label: "about",
            images: ["images/me_coding.jpg"],
            tagline: "I'm a life insurance actuary who loves to code.",
            details: `I have worked as an actuary for 10 years, and in every role, I’ve made it my mission to spot inefficiencies and develop automated solutions to streamline processes.
            
            I aim to create tools that eliminate tedious, manual tasks. That way, experts can focus on what really matters—analyzing data, uncovering insights, and making informed decisions.`
        },
        {
            id: 2,
            label: "background",
            images: [],
            tagline: "Actuary, auditor, consultant, coder",
            details: `Over the years, I’ve worked in pension consulting, life insurance, auditing, and consulting. 
            
            During my first job, I worked extensively in Excel and frequently had to tackle repetitive tasks. To streamline my work, I started experimenting with VBA, which quickly sparked my passion for coding. From that point, I sought to incorporate programming into every project where it could be useful.
            
            At work, the majority of my programming experience has involved VBA and Python. However, I've also worked on front-end design in Microsoft Access, as well as projects using Python Streamlit and Power BI.
            
            From there, I decided to enroll in a Software Engineering bootcamp at FlatIron School, where I've learned to build applications using JavaScript, React, and Python.`
        },
        {
            id: 3,
            label: "what else..",
            images: ["images/me_coding.jpg", "images/selfie2.jpg"],
            tagline: "Cat mom, outdoor enthusiast, amatuer artist",
            details: `When I'm not coding, you might find me doing arts and crafts, snowmobiling, camping, or just hanging out with my cats and watching stand-up comedy.`
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