// WAVE Hackathon 3.0 - JavaScript Functionality

// ==========================================
// Data Structures
// ==========================================

// Hackathon Format Data
const formatData = [
    {
        title: "Event Structure",
        content: `
            <ul>
                <li>24-hour continuous hackathon</li>
                <li>Offline (on-campus)</li>
                <li>Team size: 2–4 members</li>
            </ul>
        `
    },
    {
        title: "How It Works",
        content: `
            <ul>
                <li>Teams may select a problem statement from the provided domains or opt for Open Innovation</li>
                <li>Development & prototyping phase</li>
                <li>Final presentation to judges</li>
            </ul>
        `
    },
    {
        title: "Submission Guidelines",
        content: `
            <ul>
                <li>Working prototype/demo required</li>
                <li>Clear explanation of idea and impact</li>
                <li>Demonstration of technical implementation</li>
            </ul>
        `
    },
    {
        title: "Rules & Regulations",
        content: `
    <div style="text-align: left;">
        <h4 style="color: #6366f1; margin-top: 1rem; margin-bottom: 0.75rem;">Registration and Idea Submission:</h4>
        <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
            <li>Participants can register through Google Form or by contacting Student Coordinators provided in the brochure.</li>
            <li>The team size should be <strong>2-4 members</strong> of the same college.</li>
            <li>Registration fees: <strong>₹250 per head</strong>.</li>
            <li>Teams must submit their <strong>"Abstract of Problem Statement"</strong> prior to Hackathon.</li>
            <li>Problem statement can be selected from a given set of statements or else participants are encouraged for <strong>Open Innovation*</strong>.</li>
            <li>The WAVE is completely based on software i.e., software hackathon. If any hardware is required for your software, the components or materials should be borne by you.</li>
            <li>Projects that violate the Code of Conduct are not allowed.</li>
            <li>Teams violating Competition Rules, breaking the Code of Conduct, or other unsporting behavior will be disqualified from the competition. In regard to this, the organizers' decision is final.</li>
            <li>Participants should be in the venue for the entire duration of the hackathon.</li>
        </ul>

        <h4 style="color: #6366f1; margin-top: 1.5rem; margin-bottom: 0.75rem;">Evaluation Process:</h4>
        <div style="margin-left: 1rem; margin-bottom: 1.5rem;">
            <p style="margin-bottom: 0.75rem;"><strong>Initial Review (5 hours into the hackathon):</strong><br>
            Participating teams will present their ideas and explain their problem statements to a panel of judges. They will also provide an overview of their progress up to that point.</p>
            
            <p style="margin-bottom: 0.75rem;"><strong>Mid-way Review (12 hours into the hackathon):</strong><br>
            The selected teams from the initial review will present their updated progress to the panel of judges. Evaluation will be based on the quality of their solutions, the advancement they've made, and their implementation strategies.</p>
            
            <p style="margin-bottom: 0.75rem;"><strong>Final Review (24 hours into the hackathon):</strong><br>
            The remaining teams will present their fully developed solutions to the panel of judges. Evaluation will encompass creativity, technical excellence, feasibility, and potential impact of their solutions.</p>
        </div>

        <h4 style="color: #6366f1; margin-top: 1.5rem; margin-bottom: 0.75rem;">Evaluation Criteria:</h4>
        <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
            <li><strong>Innovation Quotient:</strong> Assess the extent of creativity, originality, and ingenuity evident in the proposal. This covers the novelty of the concept, the degree of innovation embedded, and the fresh perspective on the underlying problem.</li>
            <li><strong>Technical Proficiency:</strong> Gauge the technical prowess and expertise displayed by the team members. Consider the intricacy of the solution design, the depth of technical understanding, and the precision of the solution's implementation.</li>
            <li><strong>Practical Viability:</strong> Examine the practical feasibility and workability of the solution. Evaluate its potential for real-world application, scalability within different contexts, and the extent to which it addresses the problem's core issues.</li>
            <li><strong>Societal Impact:</strong> Analyze the potential positive effects and transformative outcomes the solution could bring. Consider its ability to address tangible real-life challenges, pave the way for meaningful change, and provide opportunities for future expansion.</li>
            <li><strong>Expressive Delivery:</strong> Assess the quality of the presentation, focusing on how effectively the team communicates their idea. This involves evaluating the clarity of their communication, their capacity to articulate complex concepts, and the overall coherence of the solution's narrative.</li>
        </ul>
        <p style="margin-top: 1rem; padding: 0.75rem; background: rgba(99, 102, 241, 0.1); border-left: 4px solid #6366f1; border-radius: 4px;"><strong>Note:</strong> Jury decision is final.</p>

        <h4 style="color: #6366f1; margin-top: 1.5rem; margin-bottom: 0.75rem;">Prize Distribution:</h4>
        <p style="margin-bottom: 1.5rem;">Winners will be determined based on cumulative evaluations conducted throughout the 24-hour period. Prizes will be awarded to the winning teams during a designated ceremony.</p>

        <h4 style="color: #06b6d4; margin-top: 1.5rem; margin-bottom: 0.75rem;">* Open Innovation:</h4>
        <p style="padding: 0.75rem; background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4; border-radius: 4px;">Open innovation is a collaborative problem-solving approach that involves actively seeking solutions, ideas, and expertise from a wide range of sources, including individuals, organizations, and communities, both within and outside of an entity or company. It emphasizes the importance of sharing and leveraging external knowledge and resources to drive innovation and achieve organizational goals.</p>
    </div>
        `
    }
];

// Problem Statements Data (8 domains × 3 problems each)
const problemStatements = {
    "Healthcare & Medical Technologies": [
        {
            title: "Automated Medical Report Analysis System",
            background: "Medical reports such as lab results, discharge summaries, and diagnostic notes are usually written in unstructured text form. Doctors and healthcare staff spend a significant amount of time reading and interpreting these reports to extract important information like diagnosis, test values, and medical advice. In many hospitals and clinics, especially where patient load is high, manual analysis of reports can lead to delays, human errors, and difficulty in maintaining structured digital records. With the growing volume of electronic health records, there is a strong need for automated systems that can understand and organize medical text efficiently. Natural Language Processing (NLP) and Artificial Intelligence (AI) techniques can be used to automatically analyze medical reports and extract meaningful information. This helps in faster decision-making, improved record management, and better patient care.",
            challenges: "Medical reports vary widely in format, language, and terminology. They often contain abbreviations, handwritten-style text, spelling variations, and complex medical terms. The challenge is to design an automated system that can accurately understand different types of medical reports, extract key medical information reliably, and convert unstructured text into structured data while maintaining high accuracy and data privacy. The system should also handle diverse report styles, minimize errors, and present results in a simple and usable format for healthcare professionals.",
            solutions: "The system should: Accept medical reports in text or document format; Use NLP techniques to identify important entities such as: Patient details, Disease or diagnosis, Test names and values, Medications and recommendations; Convert unstructured medical text into structured data (tables or JSON); Provide a simple summary of the medical report for quick understanding."
        },
        {
            title: "Real-Time Disease Outbreak Detection",
            background: "Tracking disease outbreaks, such as flu, dengue, or COVID-19, requires analyzing multiple real-time data sources like hospital reports, social media, and news feeds. Traditional methods are slow, leading to delayed preventive measures. Real-time monitoring can help authorities respond quickly and reduce disease spread.",
            challenges: "The main challenge is to accurately detect early signs of disease outbreaks from noisy, incomplete, and unverified real-time data sources. Social media and news data may contain misinformation, regional language variations, and ambiguous references to health conditions. The system must: Filter irrelevant or misleading information; Identify genuine health-related signals; Correlate data from multiple sources in real time; Minimize false alarms while ensuring timely alerts. The solution should present insights through intuitive dashboards showing affected regions, trends, and severity levels, enabling health authorities to take timely and informed actions.",
            solutions: "The system will aggregate real-time data from hospitals, online news, and social media, and use AI/NLP to detect early signs of disease outbreaks. Dashboards should display affected regions, trends, and severity, enabling authorities to take timely actions."
        },
        {
            title: "Real-Time Telemedicine Assistant",
            background: "Telemedicine is becoming widely used, but doctors often struggle to keep track of patient history, symptoms, and previous prescriptions during online consultations. A real-time AI assistant can help improve efficiency and accuracy.",
            challenges: "The key challenge is to accurately capture and understand live medical conversations in real time while maintaining patient privacy and data security. Medical speech may include accents, domain-specific terminology, incomplete sentences, and background noise. The system must: Convert live speech to accurate medical text; Identify and summarize key patient information such as symptoms, history, and medications; Detect possible drug interactions or conflicting prescriptions; Provide useful AI-based suggestions without replacing medical judgment. The assistant should operate seamlessly during consultations, improve efficiency, reduce cognitive load on doctors, and enhance the overall quality of telemedicine services.",
            solutions: "The system will listen to live telemedicine sessions (with consent) and summarize patient symptoms, history, and queries. It can provide AI-based recommendations, check for potential drug interactions, and assist doctors in making faster, informed decisions."
        }
    ],
    "Smart Cities and Sustainable Developments": [
        {
            title: "Smart Public Transport Crowd Management System",
            background: "Public transport systems such as buses, metro trains, and suburban railways are the backbone of urban mobility. With increasing urban population, these systems often experience heavy overcrowding, especially during peak hours such as mornings, evenings, weekends, and festival seasons. Overcrowding leads to passenger discomfort, safety risks, delays, and inefficient use of transport resources. Currently, most public transport systems operate on fixed schedules and predefined routes, with limited real-time visibility into passenger load. Authorities often rely on manual observation, ticketing data, or passenger complaints to assess crowd conditions. These methods are usually delayed and do not reflect real-time situations, making it difficult to respond quickly to sudden crowd surges. Uncontrolled crowding can also discourage citizens from using public transport, leading to increased private vehicle usage, higher fuel consumption, and more air pollution. To support smart and sustainable cities, there is a strong need for intelligent systems that can monitor crowd density in real time and assist transport authorities in making data-driven decisions.",
            challenges: "The challenge is to estimate crowd density accurately using limited data such as camera feeds, ticketing data, or sensors, while ensuring passenger privacy and system scalability.",
            solutions: "The expected solution is an AI-driven crowd management system that monitors, analyzes, and predicts passenger density in public transport systems in real time. The system may collect data from sources such as: Camera feeds at bus stops, platforms, or inside vehicles; Ticketing or entry-exit data; IoT sensors or GPS-based transport data. Using AI and machine learning techniques, the system should: Estimate real-time crowd density; Predict upcoming crowd surges based on historical and live data; Identify peak hours and high-risk congestion zones. The system should present insights through: Dashboards for transport authorities; Visual indicators or alerts for crowd levels; Suggestions for dynamic scheduling, route adjustments, or additional vehicle deployment. The solution should focus on privacy preservation, low deployment cost, and scalability. By enabling proactive crowd management, the system can improve passenger safety, enhance travel experience, and promote sustainable use of public transport."
        },
        {
            title: "Smart Streetlight Fault Detection System",
            background: "Street lights are a critical component of urban infrastructure, ensuring road safety, pedestrian security, and smooth traffic flow during night hours. In smart cities, thousands of streetlights are installed across roads, highways, residential areas, and public spaces. However, maintaining these lights efficiently remains a major challenge. In traditional systems, streetlight faults such as bulb failure, power supply issues, flickering lights, or complete outages are usually identified through manual inspections or public complaints. This process is time-consuming, labor-intensive, and often results in delayed repairs. Prolonged streetlight failures can lead to increased accidents, higher crime rates, and public inconvenience. Moreover, many streetlights remain switched on unnecessarily during low-traffic hours or even during daylight due to lack of intelligent control. This leads to excessive energy consumption and increased operational costs for municipal authorities. With the advancement of IoT, AI, and data analytics, there is a strong opportunity to transform conventional street lighting into an intelligent, self-monitoring system. A smart fault detection system can continuously monitor the health of streetlights and automatically alert authorities before issues become critical.",
            challenges: "Designing an effective smart street light fault detection system involves several challenges: Monitoring thousands of geographically distributed streetlights in real time; Detecting different fault types such as complete failure, dim light, flickering, or power fluctuation; Ensuring reliable data transmission in outdoor environments; Minimizing false alerts due to temporary voltage fluctuations or weather conditions; Maintaining low deployment and maintenance costs; Ensuring scalability for city-wide implementation. Students must design a system that balances accuracy, efficiency, and practicality while addressing real-world constraints.",
            solutions: "The expected solution is an intelligent, automated monitoring system that detects streetlight faults in real time using IoT and AI techniques. System Features: Sensors (current, voltage, light intensity) installed on streetlights to monitor operational status; IoT-enabled controllers to transmit data to a central server or cloud platform; AI/ML models to analyze sensor data and identify abnormal patterns indicating faults; Classification of fault types (bulb failure, power issue, flickering, low brightness); Real-time alerts sent to maintenance teams via dashboard, SMS, or mobile app. System Outputs: A centralized dashboard showing: Faulty streetlight locations on a city map; Type and severity of each fault; Maintenance status and repair history; Predictive maintenance suggestions to prevent future failures."
        },
        {
            title: "Smart City Complaint Analysis and Prioritization",
            background: "In smart cities, citizens actively report civic issues such as potholes, garbage overflow, water leakage, streetlight failures, traffic signal malfunctions, and noise complaints through mobile apps, helplines, emails, and social media platforms. While this increases citizen participation, it also results in a massive volume of unstructured complaints received by municipal authorities every day. Most civic complaint systems rely on manual sorting and rule-based categorization. Complaints are often processed in the order they are received rather than by urgency or impact. This leads to delays in addressing critical issues such as public safety hazards, health risks, or infrastructure failures. As a result, citizens lose trust in governance systems, and city resources are not optimally utilized. With advancements in Artificial Intelligence (AI) and Natural Language Processing (NLP), it is now possible to automatically analyze large volumes of citizen complaints, understand their content, categorize them accurately, and prioritize them based on severity, location, and potential impact. Such a system can significantly improve response times, transparency, and overall quality of urban services.",
            challenges: "The challenge is to automatically understand complaint content and prioritize them effectively.",
            solutions: "The expected solution is an AI-based complaint analysis and prioritization platform that automatically processes citizen complaints and assists municipal authorities. System Features: Collection of complaints from multiple sources (apps, emails, web portals, social media); NLP-based text analysis to extract key information such as issue type, location, and sentiment; Automatic categorization of complaints (sanitation, water, roads, electricity, traffic, etc.); Priority scoring based on: Severity of the issue; Number of similar complaints from the same area; Impact on public safety or health; Time sensitivity. System Outputs: A centralized dashboard displaying: Categorized complaints; Priority levels (high, medium, low); Geographic hotspots of frequent issues; Resolution status and response time; Alerts for high-priority or emergency complaints; Analytics reports to help city planners identify recurring problems."
        }
    ],
    "Agriculture Technology (AgriTech)": [
        {
            title: "Multilingual Farmer Advisory Chatbot",
            background: "Farmers often face day-to-day challenges related to crop selection, pest attacks, fertilizer usage, irrigation, and weather conditions. Access to timely and accurate agricultural advice is crucial, especially during critical stages of crop growth. However, many farmers depend on local agents or extension officers, who may not always be available. A major barrier in delivering digital agricultural support is language diversity. Most existing agricultural apps and portals are available only in English or a few major languages, while farmers communicate in regional languages and dialects. In addition, many farmers prefer voice-based interaction rather than text due to literacy limitations. With the growth of AI and Natural Language Processing (NLP), it is now possible to build intelligent systems that can understand and respond in multiple languages. A multilingual chatbot can act as a virtual agricultural assistant, providing instant, personalized guidance to farmers anytime and anywhere.",
            challenges: "Designing a multilingual farmer advisory chatbot presents several challenges: Understanding informal, unstructured, and dialect-specific language used by farmers; Supporting multiple regional languages and seamless switching between them; Handling voice and text inputs accurately in noisy rural environments; Providing reliable and context-aware responses based on crop type, season, and location; Ensuring responses are simple, trustworthy, and easy to follow. The system must also be scalable, low-cost, and usable on basic smart phones with limited internet connectivity.",
            solutions: "The expected solution is an AI-powered multilingual chatbot that interacts with farmers through text and voice in their preferred language. Key features of the solution include: Language detection and translation using NLP models; Intent recognition to understand farmer queries related to crops, pests, weather, and fertilizers; A knowledge base containing verified agricultural best practices; Voice-to-text and text-to-voice support for accessibility; Personalized responses based on user inputs such as crop, growth stage, and region. The chatbot should deliver accurate, actionable, and easy-to-understand advice in real time. By reducing dependency on human intermediaries, the system can improve farm productivity, reduce losses, and empower farmers with timely knowledge."
        },
        {
            title: "Development of Smart system from Farm to Consumer 'weekly santhe'",
            background: "Weekly farmers' markets or \"Santhe\" have traditionally provided a platform where farmers can sell fresh produce directly to consumers. These markets allow face-to-face interaction, bargaining, and transparent pricing. Consumers enjoy fresh produce and trust the source, while farmers get fair prices without intermediaries. However, due to urbanization, lack of infrastructure, and online shopping trends, many consumers cannot access these markets conveniently. Similarly, online platforms exist but often lack the interactive, real-time, visual, and bargaining experience that physical markets provide. Creating a digital replica of a weekly Santhe would bridge this gap, enabling consumers to experience the market virtually while providing farmers a direct, transparent, and fair-selling platform.",
            challenges: "The core challenge is to simulate a real weekly Santhe digitally while ensuring user engagement, transparency, and real-time interactions: Realistic product visualization: Showing live or high-quality images/videos of the produce, including size, quality, and freshness; Direct negotiation: Enabling buyers and sellers to interact in real time, mimicking face-to-face bargaining; Market transparency: Displaying fair prices, transaction history, and product availability clearly; Scalability: Supporting multiple farmers and buyers simultaneously, possibly in different regions; UX/UI design: Ensuring the platform is simple, engaging, and usable for farmers with low digital literacy; Integration with logistics/payment: Optionally linking with delivery or payment systems for seamless transactions. Students need to create a distinct and innovative solution that balances realism, interactivity, and efficiency, effectively replicating the experience of visiting a weekly market online.",
            solutions: "The expected solution is a software platform (web or mobile) that allows: Real-Time market simulation: Virtual stalls for farmers displaying products with images/videos; Direct communication: Chat, voice, or video interactions between buyers and sellers; Dynamic pricing & negotiation: Options to bargain and finalize deals in real time; Dashboard for farmers: Track inventory, sales, and buyer interactions; UX/UI experience: Intuitive interface that makes users feel like they are at a real Santhe; Optional features: Integration with payment gateways, delivery options, and rating systems."
        },
        {
            title: "Community-Based Crop Demand Forecasting Platform",
            background: "One of the biggest challenges farmers face is uncertainty about market demand. Often, farmers plant crops without accurate information about which crops are in demand locally or regionally. This leads to overproduction of certain crops, underproduction of others, and ultimately financial losses due to unsold produce or low market prices. With the availability of market data, historical crop trends, and consumer purchasing patterns, it is possible to predict crop demand in specific communities. Using AI and data analytics, farmers can plan their crop cultivation based on real demand, reducing wastage, improving income, and ensuring better resource allocation. A community-based demand forecasting system will connect farmers to buyers and markets, providing actionable insights for crop planning and supply chain decisions.",
            challenges: "Designing a crop demand forecasting platform involves several challenges: Data Collection: Collecting accurate historical market prices, crop sales data, and local consumption trends; Multi-Region Demand Prediction: Accounting for regional differences in crop preferences, seasonality, and local festivals; Integration with Farmer Workflow: Making the platform simple and accessible to farmers with limited digital literacy; Dynamic Prediction: Providing real-time or weekly demand updates to adapt to changing market conditions; Actionable Insights: Translating predictions into easy-to-follow crop planning advice that farmers can implement.",
            solutions: "The solution is an AI-powered crop demand forecasting platform that helps farmers plan cultivation based on real-time and historical demand data. Key Features: Data Aggregation: Collect market prices, sales, seasonal trends, and consumer demand from local markets and online sources; Predictive Analytics: Use machine learning models to forecast crop demand for different communities and regions; Decision Support: Suggest optimal crop allocation, planting schedules, and quantities based on predicted demand; User Interface: Simple dashboards or mobile app interfaces for farmers to view recommendations, alerts, and market trends; Optional Features: Alerts for sudden price spikes or demand surges, integration with cooperative societies, and links to buyers."
        }
    ],
    "FinTech": [
        {
            title: "Intelligent Fraud Detection System for Digital Transactions",
            background: "With the rapid growth of digital payments such as UPI, mobile wallets, credit/debit cards, and online banking, financial transactions have become faster and more convenient. However, this growth has also increased the risk of fraudulent activities like unauthorized transactions, identity theft, and payment scams. Banks and financial institutions process millions of transactions daily, making it difficult to manually monitor suspicious activities in real time. Traditional rule-based fraud detection systems often fail to detect new and evolving fraud patterns, leading to financial losses and reduced customer trust. Advanced data analytics and machine learning techniques can help in identifying unusual transaction patterns and detecting fraud more accurately and quickly.",
            challenges: "Financial fraud patterns constantly evolve, making it difficult to rely on fixed rules or manual checks. The system must accurately distinguish between genuine and fraudulent transactions while minimizing false positives, which can inconvenience legitimate users. The challenge is to design a system that can analyze large volumes of transaction data in real time, detect anomalies, adapt to new fraud patterns, and ensure data security and user privacy.",
            solutions: "The system should: Analyze transaction data such as amount, frequency, location, and time; Identify suspicious or abnormal transaction patterns; Classify transactions as normal or potentially fraudulent; Generate alerts for high-risk transactions; Provide a simple dashboard showing fraud insights and trends."
        },
        {
            title: "Automated Financial Document Processing System",
            background: "Financial organizations, businesses, and individuals deal with a wide range of financial documents such as invoices, bank statements, payment receipts, tax records, and transaction summaries. These documents are often generated in different formats including PDFs, scanned images, and text files, and may come from multiple sources. Manual processing of such documents requires significant time and effort and is prone to human errors, especially when handling large volumes of data. Tasks like extracting transaction details, verifying amounts, categorizing expenses, and maintaining structured records become inefficient as the volume of documents increases. With increasing digitization in the financial sector, there is a growing need for automated systems that can intelligently read, understand, and organize financial documents. Such systems can help improve operational efficiency, support faster audits and compliance checks, and enable better financial analysis and decision-making.",
            challenges: "Financial documents vary widely in structure, layout, language, and quality. Some documents may be scanned copies with low readability, while others may contain inconsistent formatting, abbreviations, or missing information. Extracting accurate and relevant data from such unstructured or semi-structured documents is a major challenge. The system must be able to handle different document types, identify important financial fields reliably, and reduce extraction errors. Ensuring data accuracy, consistency, and confidentiality is critical, as financial information is highly sensitive. Additionally, the output should be easy to understand and integrate with existing digital systems.",
            solutions: "The system should: Accept financial documents in various formats such as PDF, images, or text files; Automatically extract key information such as dates, amounts, transaction details, and account information; Convert unstructured document content into structured data formats like tables or JSON; Provide summarized views or reports for quick financial insights; Ensure secure handling and storage of financial data."
        },
        {
            title: "Personalized Financial Expense Tracking and Budgeting Platform",
            background: "With the rapid adoption of digital payment methods such as UPI, debit and credit cards, online banking, and digital wallets, individuals generate a large amount of financial transaction data every day. Despite this, many people struggle to manage their personal finances due to irregular income patterns, unexpected expenses, and limited financial literacy. Most existing expense-tracking applications provide only basic transaction listings or category-wise summaries. These tools often require manual input, lack personalization, and fail to provide actionable insights that can help users improve their financial habits. As a result, users remain unaware of inefficient spending patterns and missed saving opportunities. There is a growing need for intelligent financial platforms that can automatically analyze user transaction data, understand individual spending behavior, and provide personalized recommendations. By leveraging data analytics and intelligent systems, such platforms can help users make informed financial decisions, plan budgets effectively, and achieve long-term financial stability.",
            challenges: "Personal financial data is generated from multiple sources such as bank accounts, digital wallets, and payment applications, each following different formats and transaction descriptions. Accurately categorizing expenses and identifying meaningful patterns without manual intervention is a significant challenge. Additionally, users may have incomplete, inconsistent, or noisy transaction data, making analysis more complex. The system must ensure strong data privacy and security while delivering clear, personalized insights. Another challenge is presenting financial information in a simple and understandable way so that users can easily take action based on the recommendations provided.",
            solutions: "The system should: Automatically collect and analyze transaction data from multiple financial sources; Categorize expenses into meaningful groups with minimal manual input; Track income, expenses, and savings trends over time; Provide visual dashboards, summaries, and monthly financial reports; Generate personalized budgeting and saving recommendations based on user behavior; Notify users when spending exceeds predefined limits or budget thresholds; Ensure secure handling and protection of sensitive financial data."
        }
    ],
    "Robotics & Drones (UAVs)": [
        {
            title: "Drone Flight Path Optimization Prototype",
            background: "Efficient flight path planning is a critical requirement in drone operations such as surveillance, delivery, inspection, and mapping. Drones have limited battery capacity and must often operate in environments with obstacles, restricted zones, and varying flight conditions. Choosing an optimal path helps reduce energy consumption, improve mission efficiency, and enhance operational safety. Traditional drone navigation often follows predefined routes or manual control, which may not be optimal in terms of distance, time, or resource usage. With increasing interest in autonomous and intelligent drones, there is a growing need for systems that can dynamically compute efficient flight paths based on environmental constraints. A prototype flight path optimization system can demonstrate how drones calculate, visualize, and follow optimized routes using simplified environments or simulations, making it suitable for rapid development and experimentation.",
            challenges: "Designing a fully autonomous and real-world-ready flight planning system is complex and time-consuming. Within a 24-hour hackathon, the challenge is to focus on building a simplified yet meaningful prototype that demonstrates the core logic of path optimization. The system must consider basic constraints such as distance, obstacles, or restricted zones while remaining computationally simple and easy to visualize. Teams must balance optimization accuracy with development speed and clarity of demonstration.",
            solutions: "The system should: Define a start point and destination for the drone; Represent the environment using a simple map or grid (real or simulated); Generate an optimized flight path based on chosen criteria such as shortest distance or minimum energy usage; Avoid predefined obstacles or no-fly zones; Visualize the planned route clearly through simulation, animation, or graphical output; Explain the optimization logic, assumptions, and limitations."
        },
        {
            title: "Vision-Based Object Detection Using Drones",
            background: "Drones equipped with cameras are widely used in applications such as surveillance, traffic monitoring, infrastructure inspection, disaster assessment, and environmental monitoring. A key capability in these applications is the ability to automatically detect and identify objects of interest from aerial images or video streams. Manual monitoring of drone footage is time-consuming and inefficient, especially when large areas are covered. Vision-based object detection systems can assist by automatically identifying objects such as vehicles, people, buildings, or other predefined targets, enabling faster decision-making and improved situational awareness. With advances in computer vision and deep learning, it is now possible to build prototype systems that detect objects from images or video using pre-trained models or lightweight algorithms. Such prototypes are ideal for demonstrating real-world drone intelligence within a limited development timeframe.",
            challenges: "Aerial imagery presents unique challenges compared to ground-level images. Objects may appear small, partially occluded, or captured under varying lighting and motion conditions. Processing visual data efficiently while maintaining reasonable accuracy is challenging, especially within limited computational and time constraints. Within a 24-hour hackathon, the challenge is to build a simplified object detection prototype that demonstrates the end-to-end pipeline-from image acquisition to detection and visualization-without aiming for industrial-level precision. The system should focus on clarity, reliability, and demonstrable results.",
            solutions: "The system should: Capture images or video from a drone camera or use sample aerial datasets; Process visual input to detect predefined objects of interest; Highlight detected objects using bounding boxes or markers; Display detection results in real time or through recorded output; Provide a clear explanation of the detection approach, assumptions, and limitations."
        },
        {
            title: "Autonomous Indoor Robot Navigation and Obstacle Avoidance System",
            background: "Indoor mobile robots are increasingly used in environments such as warehouses, hospitals, offices, and laboratories for tasks like monitoring, delivery, and inspection. Unlike outdoor systems, indoor robots must operate without GPS and rely on sensors and onboard intelligence to navigate safely. Manual operation of robots in indoor environments is inefficient and prone to errors, especially in spaces with obstacles, narrow passages, and dynamic layouts. Autonomous navigation systems allow robots to move independently, avoid obstacles, and reach target locations reliably. A prototype indoor navigation system can demonstrate core robotics concepts such as perception, decision-making, and motion control, making it well-suited for rapid development in a hackathon environment.",
            challenges: "Indoor environments are often cluttered and continuously changing. Detecting obstacles, planning safe paths, and ensuring smooth movement within limited space is challenging, especially without precise location data. Within a 24-hour hackathon, the challenge is to build a simplified autonomous navigation prototype that demonstrates obstacle detection and basic path planning using simulation or small-scale robotic hardware. The focus should be on reliable behavior and clear demonstration rather than full-scale deployment.",
            solutions: "The system should: Demonstrate autonomous movement of a ground robot (real or simulated); Detect and avoid obstacles in real time; Navigate from a start position to a target location; Visualize robot movement or navigation decisions; Clearly explain navigation logic, assumptions, and limitations."
        }
    ],
    "Cybersecurity": [
        {
            title: "Phishing Detection and Awareness System",
            background: "Phishing attacks are among the most common and damaging cyber threats today. Attackers use deceptive emails, messages, and fake websites to trick users into revealing sensitive information such as login credentials, financial details, or personal data. These attacks often appear highly convincing, making it difficult for users to identify them. With the rapid growth of digital communication platforms, phishing attacks have become more frequent and sophisticated. Many users lack the technical knowledge to distinguish legitimate messages from malicious ones, leading to security breaches, financial loss, and compromised systems. Automated phishing detection systems can assist users by analyzing communication content and warning them about potential threats. Along with detection, educating users about why a message is suspicious can significantly improve cyber awareness and reduce future risks.",
            challenges: "Phishing content varies widely in language, structure, and delivery method. Attackers frequently change tactics to bypass detection systems, making rule-based approaches insufficient. At the same time, overly aggressive detection may result in false positives, causing users to ignore important legitimate messages. Within a 24-hour hackathon, the challenge is to build a prototype system that can identify phishing attempts accurately while clearly explaining the reasons behind the classification. The system must remain lightweight, understandable, and suitable for demonstration without requiring access to real user data.",
            solutions: "The system should: Analyze emails, messages, or URLs provided as input; Identify indicators of phishing such as suspicious links, keywords, or sender patterns; Classify content as legitimate or potentially phishing; Provide clear warnings and explanations to users; Include an awareness component that educates users on common phishing tactics; Clearly state assumptions, limitations, and scope of the prototype."
        },
        {
            title: "User Authentication Anomaly Detection System",
            background: "User authentication systems are a critical part of modern digital platforms. Even when strong passwords or multi-factor authentication are used, accounts can still be compromised through credential leaks, social engineering, or malware attacks. Traditional authentication systems usually verify identity only at the time of login and do not continuously monitor user behavior. As a result, unauthorized access may go unnoticed if attackers successfully obtain valid credentials. Behavior-based authentication monitoring can improve security by analyzing login patterns such as time, location, device, and frequency. Detecting unusual authentication behavior early can help prevent data breaches and account misuse.",
            challenges: "User login behavior naturally varies over time, making it difficult to distinguish between normal variation and malicious activity. For example, a legitimate user may log in from a new location or device. Within a 24-hour hackathon, the challenge is to design a prototype that analyzes authentication data and identifies suspicious patterns without generating excessive false alerts. The system must be simple, explainable, and safe to demonstrate using simulated or anonymized data.",
            solutions: "The system should: Analyze authentication logs or simulated login data; Track patterns such as login time, frequency, location, or device; Detect unusual or anomalous authentication behavior; Generate alerts or risk scores for suspicious logins; Visualize authentication trends and anomalies; Clearly explain detection logic and assumptions."
        },
        {
            title: "Network Intrusion Detection Prototype",
            background: "Modern computer networks are constantly exposed to security threats such as unauthorized access, denial-of-service attacks, malware communication, and data exfiltration. Monitoring network traffic manually is impractical due to the high volume and complexity of data generated even in small networks. Traditional security mechanisms like firewalls primarily focus on access control and may not detect suspicious behavior occurring within the network. Intrusion Detection Systems (IDS) play a critical role by continuously monitoring network activity and identifying abnormal or malicious patterns. With the availability of network logs, packet captures, and simulated traffic data, it is possible to build prototype IDS solutions that analyze traffic behavior and highlight potential threats. Such systems help security teams respond proactively and improve overall network security.",
            challenges: "Network traffic consists of diverse protocols, communication patterns, and usage behaviors. Differentiating between normal network activity and malicious behavior is challenging, especially when attackers attempt to disguise their actions. Within a 24-hour hackathon, the challenge is to design a simplified IDS prototype that analyzes network traffic data and detects suspicious activity without requiring deep packet inspection or complex infrastructure. The system must be safe, ethical, and easy to demonstrate using simulated or publicly available datasets.",
            solutions: "The system should: Analyze network traffic data or logs (realistic or simulated); Identify unusual patterns such as abnormal traffic volume, repeated failed connections, or suspicious port usage; Classify activity as normal or potentially malicious; Generate alerts or notifications for detected intrusions; Visualize network activity and detected anomalies; Clearly explain detection logic, assumptions, and limitations."
        }
    ],
    "Education Technology (EdTech)": [
        {
            title: "Smart Attendance and Engagement Monitoring System",
            background: "In most educational institutions, attendance is still recorded manually or through basic biometric systems. These methods only capture presence and do not reflect actual student engagement. A student may be physically present in a classroom but mentally disengaged, using mobile phones or not participating in learning activities. With the rise of smart classrooms, online learning, and hybrid education, institutions need advanced systems that go beyond simple attendance. Faculty members also face challenges in tracking participation, attentiveness, and interaction levels, especially in large classrooms. An intelligent system that automatically records attendance and analyzes student engagement can help improve teaching effectiveness, learning outcomes, and academic performance. Technologies such as AI, computer vision, mobile apps, and data analytics can be used to build such a system.",
            challenges: "Manual attendance is time-consuming and error-prone; Proxy attendance is difficult to prevent; No standard method to measure student attention and engagement; Teachers cannot easily track: Student participation; Focus levels during lectures; Drop in engagement over time; Online and hybrid classes lack reliable engagement monitoring; Privacy, fairness, and scalability must be considered.",
            solutions: "Develop a Smart Attendance and Engagement Monitoring System that uses technology to automatically record attendance and analyze engagement levels in real time. Key Features: 1. Automated Attendance: Face recognition via classroom camera OR QR code / mobile app-based attendance; Secure and proxy-free attendance marking. 2. Engagement Monitoring: Detect indicators such as: Eye gaze direction; Head movement; Screen interaction (for online classes); Measure participation through: Question responses; Polls; Quiz interactions. 3. Dashboard for Faculty: Attendance percentage; Engagement score per student; Class-wise and subject-wise analytics; Alerts for low engagement or absenteeism. 4. Student View: Personal attendance summary; Engagement feedback; Suggestions for improvement. 5. Reports and Analytics: Weekly/monthly reports; Trends in engagement vs performance; Exportable data for academic review."
        },
        {
            title: "Faculty Workload & Activity Tracking System",
            background: "In higher education institutions, faculty members perform multiple roles beyond classroom teaching. These include lesson planning, evaluation, mentoring, project guidance, research, administrative duties, accreditation work, event coordination, and professional development activities. Currently, most institutions rely on manual records, spreadsheets, or individual reports to track faculty workload. This approach leads to: Inconsistent data; Difficulty in assessing actual workload distribution; Increased administrative burden; Challenges during appraisal, promotion, and accreditation processes (NBA/NAAC). A centralized digital system is required to accurately capture faculty contributions, reduce paperwork, and provide transparency in workload assessment.",
            challenges: "Workload data is scattered across multiple formats; Manual entry leads to errors and duplication; Faculty efforts outside teaching are often underreported; Heads of departments lack real-time visibility; Appraisal and accreditation data preparation is time-consuming; No standardized workload metrics. The challenge is to design a system that is simple, fair, and acceptable to faculty, while meeting institutional and accreditation requirements.",
            solutions: "Design and implement a web or mobile-based application that enables structured logging, monitoring, and reporting of faculty workload. Faculty Profile Management: Stores faculty details, roles, and academic mappings; Teaching Workload Tracking: Calculates teaching hours, credits, and class load automatically; Academic Activities: Records evaluation, mentoring, project guidance, and lab duties; Research & Development: Tracks publications, FDPs, patents, and industry work; Administrative Roles: Logs committee, event, and accreditation responsibilities; Workload Analytics: Generates workload scores and balance insights; Reports & Documentation: Creates appraisal and accreditation-ready reports; Approval Workflow: Supports HoD/Admin review and status tracking."
        },
        {
            title: "Student Internship & Skill Tracking System",
            background: "Internships, certifications, online courses, and project-based learning play a critical role in improving student employability. Students acquire skills from multiple sources such as companies, online platforms, workshops, and industrial training programs. However, in most institutions: Internship details are collected manually or via emails; Certificates are scattered across platforms; Skills are self-declared without validation; Placement cells lack a centralized student skill database; Faculty mentors struggle to track internship progress. This leads to poor visibility of student capabilities, inefficient placement shortlisting, and difficulties during accreditation and audits.",
            challenges: "No centralized internship and skill repository; Manual verification of certificates; Difficulty in tracking internship duration and outcomes; Placement cells lack real-time skill data; Students struggle to showcase verified skills; Accreditation documentation is time-consuming. The challenge is to build a simple, transparent, and verifiable system that tracks student internships and skills in real time.",
            solutions: "Design a web or mobile-based platform that acts as a single source of truth for student internships and skill development. 1. Student Profile Management: Stores academic details, semester-wise information, resume-ready skills, and internship eligibility status. 2. Internship Tracking Module: Records internship company, role, duration, mode, mentor details, and periodic progress updates. 3. Skill Mapping & Validation: Maps skills to internships and certifications with faculty/mentor verification and proficiency levels. 4. Certification & Document Upload: Enables secure upload and verification of certificates, offer letters, and internship reports. 5. Mentor & Faculty Dashboard: Allows mentors to monitor internship progress, provide feedback, and approve submissions. 6. Placement Cell Dashboard: Filters students by skills and internships, generates recruiter shortlists, and analyzes placement readiness. 7. Analytics & Reports: Provides internship statistics, skill distribution, trend analysis, and exportable reports for placement and accreditation. 8. Notifications & Alerts: Sends alerts for deadlines, missing documents, approvals, and internship completion updates."
        }
    ],
    "E-Commerce & Intelligent Retail": [
        {
            title: "Product Comparison Tool for E-Commerce",
            background: "Online shoppers often face difficulty when choosing between similar products from different brands or sellers. Information such as price, features, ratings, warranty, and delivery options is scattered across multiple product pages. Customers usually open several tabs or rely on memory to compare products, which is time-consuming and confusing. This often leads to poor purchase decisions, cart abandonment, or dissatisfaction after purchase. A dedicated Product Comparison Tool can simplify decision-making by presenting all key product details in a single, clear, side-by-side view.",
            challenges: "Product information is spread across multiple pages; Feature descriptions are inconsistent across sellers; Users struggle to compare prices, specifications, and reviews; Manual comparison wastes time and reduces conversion; Small sellers lack standardized comparison visibility. The challenge is to build a simple, fast, and user-friendly comparison system that works with existing e-commerce product data.",
            solutions: "Design a web or mobile-based application/module that enables structured product comparison with a clean user interface. Product Selection: Add 2-4 products for comparison easily; Side-by-Side View: Compare price, features, ratings, warranty, and delivery; Feature Normalization: Standardize attributes and highlight differences; Best Choice Highlight: Mark lowest price, highest rating, and best value; Filters & Sorting: Sort by price, rating, or feature; filter must-have attributes; Save & Share: Save comparison and share links with others."
        },
        {
            title: "Intelligent Store Layout Planner",
            background: "Retail stores, both physical and hybrid, often struggle with product placement. Poor layout can lead to: Low sales of certain products; Cluttered aisles and poor customer flow; Difficulty in locating products; Uneven utilization of shelf space. Traditionally, store layouts are designed manually based on intuition or past experience. This can result in missed opportunities for maximizing sales, improving customer experience, and optimizing space utilization. With sales data, customer movement patterns, and product demand, it is possible to design a data-driven, intelligent store layout to improve sales, visibility, and overall efficiency.",
            challenges: "Manual layouts are time-consuming and subjective; High-demand products may be placed poorly; Customers may face difficulty navigating the store; Shelf space may not be optimally used; New products are difficult to integrate without disrupting flow. The challenge is to design a system that automatically suggests an optimized layout based on sales, customer behavior, and product attributes.",
            solutions: "Design a software tool (web or mobile) that allows store managers to: Input store dimensions, shelves, and products; Load historical sales data and customer footfall patterns; Generate visual layouts with optimal product placement; Simulate customer flow and identify high-traffic zones; Recommend placement changes for new products."
        },
        {
            title: "Voice-Based Product Search for E-Commerce",
            background: "Traditional e-commerce platforms rely on text-based search, which can be slow, inconvenient, or inaccurate for many users. Typing product names or specifications can be cumbersome, especially for: Users with limited literacy or typing skills; Mobile users in a hurry; Customers browsing hands-free (e.g., cooking, commuting). With advances in speech recognition and natural language processing (NLP), voice-based product search allows users to speak their queries naturally, making product discovery faster, more intuitive, and more accessible.",
            challenges: "Accurately understanding user voice queries in different accents, languages, or noisy environments; Mapping spoken queries to product catalogs (synonyms, brand variations, or incomplete descriptions); Returning relevant product results quickly; Integrating voice search with filters like price, category, rating, or availability; Ensuring usability on mobile and web platforms. The challenge is to design a system that accurately converts voice queries into actionable search results for e-commerce products.",
            solutions: "Design a web or mobile application/module that enables voice-driven product search: Users press a microphone icon or trigger a voice assistant; Speak product queries naturally, e.g., \"Show me red running shoes under $50\"; System processes speech using Speech-to-Text (STT) technology; Maps keywords to product catalog; Displays results sorted by relevance with optional filters; Optional features: voice feedback, autocomplete suggestions, or product recommendations."
        }
    ],
    "Generative AI and Agentic AI": [
        {
            title: "Synthetic Data Generator for AI Training",
            background: "AI models, especially in computer vision, NLP, and healthcare, require large, high-quality datasets to perform well. However, real-world data often comes with challenges: Data is limited, incomplete, or unbalanced; Data is sensitive (medical records, financial info); Collecting and labeling data is time-consuming and expensive. Synthetic data generation provides a solution by creating artificial but realistic datasets. These datasets can be used to train AI models while preserving privacy, increasing dataset size, and improving model performance.",
            challenges: "Generating realistic data that closely mimics real-world patterns; Preserving data diversity to avoid overfitting; Ensuring synthetic data does not reveal sensitive information; Creating datasets for multiple AI domains: images, tabular data, text, audio; Integrating synthetic data with existing real datasets for training AI models. The challenge is to design a system that generates high-quality synthetic data for AI training in a way that is safe, scalable, and versatile.",
            solutions: "Build a software platform or module that allows users to: Specify data type (image, tabular, text, audio); Define attributes and distributions (e.g., number of classes, range of values); Generate synthetic datasets with configurable size; Visualize or inspect generated data; Export data in standard formats for AI training (CSV, JSON, images, audio files)."
        },
        {
            title: "Multi-Lingual Content Translation & Generation",
            background: "In today's global digital world, content is created in multiple languages, but reaching diverse audiences is still a challenge. Businesses, educators, and content creators often face: Manual translation is slow, costly, and inconsistent; Generating localized content for multiple languages requires expert knowledge; Language barriers reduce reach, engagement, and accessibility; Real-time communication across languages is difficult. Generative AI can help by automatically translating and generating content in multiple languages while preserving meaning, context, and tone.",
            challenges: "Translating content accurately while maintaining context and sentiment; Supporting multiple languages, including regional or low-resource languages; Generating new content (summaries, articles, social media posts) in the target language; Handling domain-specific terminology (technical, medical, legal); Ensuring readability and natural language flow; Integrating text translation with text, audio, or image-based content. The challenge is to design a system that translates, generates, and localizes content efficiently while keeping it readable, relevant, and culturally appropriate.",
            solutions: "Build a software application or module that allows users to: Input text, articles, or content in one language; Choose target language(s) for translation or generation; Generate accurate translations or create new content in the target language; Preview and edit generated content before publishing; Optional: integrate audio output (text-to-speech) or image-based content translation."
        },
        {
            title: "Multi-Modal Meeting Assistant",
            background: "In professional and academic settings, meetings often involve multiple participants, discussions, and tasks. Manual note-taking and tracking action items is time-consuming and error-prone. Key challenges include: Missing important points during discussions; Difficulty in assigning tasks and tracking responsibilities; Lack of automatic summarization for long meetings; Integrating multiple formats: audio, video, slides, and chat. A multi-modal AI assistant can listen to and analyze meetings in real-time, combining audio, video, and textual cues to generate summaries, extract action items, and assign tasks, improving efficiency and accountability.",
            challenges: "Accurately transcribing speech to text in multi-speaker environments; Summarizing long discussions in a concise and meaningful way; Identifying and tracking action items and responsibilities; Integrating multiple modalities: spoken words, video gestures, and shared documents; Providing real-time assistance during meetings without disrupting participants. The challenge is to design a system that can understand, summarize, and act on meetings autonomously while being accurate, fast, and user-friendly.",
            solutions: "The solution could be a software tool or web/mobile application that: Captures audio/video of meetings; Converts speech into text using speech recognition; Extracts key points, tasks, and decisions using NLP models; Integrates with calendars, email, or project management tools to assign tasks; Displays summaries, action items, and highlights in real-time or post-meeting reports. Optional advanced features: Multi-language support for international teams; Speaker identification for accurate task assignment; Emotion or sentiment detection to highlight critical points."
        }
    ],
    "Open Innovation": [
        {
            title: "Bring Your Own Idea",
            background: "Open Innovation is a collaborative problem-solving approach that involves actively seeking solutions, ideas, and expertise from a wide range of sources. It emphasizes the importance of creativity, originality, and thinking outside the box. Participants are encouraged to identify real-world problems that they are passionate about and develop innovative solutions that can create meaningful impact. This track welcomes ideas from any domain - whether it's social good, environment, accessibility, entertainment, productivity, or any other area where technology can make a difference.",
            challenges: "The challenge is to identify a genuine problem that affects people or communities, and design an innovative technology-based solution. Your idea should demonstrate: Clear problem identification and understanding; Creative and original approach to solving the problem; Technical feasibility within the hackathon timeframe; Potential for real-world impact and scalability; Strong presentation of the concept and prototype.",
            solutions: "Participants can build any software solution including but not limited to: Web or mobile applications; AI/ML-based tools; IoT integrations; Automation systems; Data analytics platforms; Social impact solutions; Accessibility tools; Environmental solutions; Productivity enhancers. The key is to demonstrate innovation, technical skills, and potential impact. Your solution should address a genuine need and showcase your team's creativity and problem-solving abilities."
        }
    ]
};

// Organizing Committee Data
const committeeData = [
    {
        title: "Registration Committee",
        content: `
            <div class="committee-grid">
                <div class="committee-member">
                    <h4>Prof.Lakshmi P.Kollur</h4>
                    <p>📞 9739782170</p>
                </div>
                <div class="committee-member">
                    <h4>Prof.Anita Kori</h4>
                    <p>📞 7892194877</p>
                </div>
                <div class="committee-member">
                    <h4>Prof.Laxmi M</h4>
                    <p>📞 7975364930</p>
                </div>
                <div class="committee-member">
                    <h4>Prof.Jayasheela G</h4>
                    <p>📞 7204980831</p>
                </div>
                <div class="committee-member">
                    <h4>Dhruv Kittur</h4>
                    <p>📞 9663427121</p>
                </div>
                <div class="committee-member">
                    <h4>Pramodini Goudar</h4>
                    <p>📞 8217887297</p>
                </div>
                <div class="committee-member">
                    <h4>Rahul K Savla</h4>
                    <p>📞 7338044295</p>
                </div>
                <div class="committee-member">
                    <h4>Anagha B</h4>
                    <p>📞 9019610253</p>
                </div>
                <div class="committee-member">
                    <h4>Nitin N</h4>
                    <p>📞 8496018802</p>
                </div>
                <div class="committee-member">
                    <h4>Housabai Bhosale</h4>
                    <p>📞 7892328074</p>
                </div>
                <div class="committee-member">
                    <h4>Sohail Hangaragi</h4>
                    <p>📞 9148665890</p>
                </div>
                <div class="committee-member">
                    <h4>Tubatasneem W</h4>
                    <p>📞 9019805382</p>
                </div>
            </div>
        `
    },
    {
        title: "Faculty Coordinators",
        content: `
            <p>Details will be updated soon.</p>
        `
    },
    {
        title: "Technical Committee",
        content: `
            <p>To be updated</p>
        `
    },
    {
        title: "Accommodation Committee",
        content: `
            <p>To be updated</p>
        `
    },
    {
        title: "Student Co-ordinators",
        content: `
            <p>To be updated</p>
        `
    }
];

// FAQs Data
const faqsData = [
    {
        question: "What is the registration fee?",
        answer: "₹250 per participant"
    },
    {
        question: "Is this hackathon online or offline?",
        answer: "This is an offline (on-campus) hackathon hosted at BEC, Bagalkot."
    },
    {
        question: "What is the team size?",
        answer: "Teams must consist of 2–4 members."
    },
    {
        question: "Can we form inter-college teams?",
        answer: "No, all team members must be from the same college."
    },
    {
        question: "How do I register?",
        answer: "You can register via the Google Form linked on this website or contact the Student Coordinators."
    },
    {
        question: "Do I need to submit an abstract?",
        answer: "Yes, abstract submission is required during registration."
    },
    {
        question: "Is this a software hackathon?",
        answer: "Yes, this is primarily a software-based hackathon."
    },
    {
        question: "Will certificates be provided?",
        answer: "Yes, all participants will receive participation certificates, and winners will receive merit certificates."
    }
];

// Announcements Data
const announcementsData = [
    {
        title: "Top Teams Selected",
        content: `
            <p><strong>To be updated on hackathon day.</strong></p>
            <p>We will publish the shortlisted/top teams here once the selection is completed.</p>
            <ul>
                <li>Team 1: TBD</li>
                <li>Team 2: TBD</li>
                <li>Team 3: TBD</li>
            </ul>
        `
    },
    {
        title: "Winners",
        content: `
            <p><strong>To be updated on hackathon day.</strong></p>
            <ul>
                <li><strong>1st Prize</strong>: TBD</li>
                <li><strong>2nd Prize</strong>: TBD</li>
                <li><strong>3rd Prize</strong>: TBD</li>
            </ul>
        `
    },
    {
        title: "Live Updates",
        content: `
            <p>Important updates, instructions, and links will be posted here during the event.</p>
            <ul>
                <li>Update 1: TBD</li>
                <li>Update 2: TBD</li>
            </ul>
        `
    }
];

// ==========================================
// Accordion Functionality
// ==========================================

function createAccordion(container, data, type = 'simple') {
    container.innerHTML = '';

    data.forEach((item, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        if (type === 'simple') {
            accordionItem.innerHTML = `
                <div class="accordion-header" data-index="${index}">
                    <span>${item.title || item.question}</span>
                    <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-body">
                        ${item.content || item.answer}
                    </div>
                </div>
            `;
        }

        container.appendChild(accordionItem);
    });

    // Add click handlers
    const headers = container.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isActive = currentItem.classList.contains('active');

            // Close all items
            container.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = null;
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                currentItem.classList.add('active');
                const content = currentItem.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

// ==========================================
// Problem Statements Two-Level Accordion
// ==========================================

function createProblemStatementsAccordion() {
    const container = document.getElementById('domainsAccordion');
    container.innerHTML = '';

    Object.keys(problemStatements).forEach((domain, domainIndex) => {
        const domainItem = document.createElement('div');
        domainItem.className = 'accordion-item domain-item';

        domainItem.innerHTML = `
            <div class="accordion-header domain-header" data-domain="${domain}">
                <span>${domain}</span>
                <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content domain-content">
                <div class="accordion-body">
                    <div class="problems-accordion" id="problems-${domainIndex}"></div>
                </div>
            </div>
        `;

        container.appendChild(domainItem);

        // Create problem statements for this domain
        const problemsContainer = domainItem.querySelector(`#problems-${domainIndex}`);

        // Special handling for Open Innovation - show content directly without nested accordion
        if (domain === "Open Innovation") {
            const problem = problemStatements[domain][0];
            problemsContainer.innerHTML = `
                <table class="problem-table">
                    <tr>
                        <th>Field</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><strong>Title</strong></td>
                        <td>${problem.title}</td>
                    </tr>
                    <tr>
                        <td><strong>Background</strong></td>
                        <td>${problem.background}</td>
                    </tr>
                    <tr>
                        <td><strong>Challenges</strong></td>
                        <td>${problem.challenges}</td>
                    </tr>
                    <tr>
                        <td><strong>Expected Solution</strong></td>
                        <td>${problem.solutions}</td>
                    </tr>
                </table>
            `;
        } else {
            // Normal domains with nested problem statements
            problemStatements[domain].forEach((problem, problemIndex) => {
                const problemItem = document.createElement('div');
                problemItem.className = 'accordion-item problem-item';

                problemItem.innerHTML = `
                    <div class="accordion-header problem-header" data-problem="${problemIndex}">
                        <span>Problem Statement ${problemIndex + 1}</span>
                        <span class="accordion-icon">▼</span>
                    </div>
                    <div class="accordion-content problem-content">
                        <div class="accordion-body">
                            <table class="problem-table">
                                <tr>
                                    <th>Field</th>
                                    <th>Description</th>
                                </tr>
                                <tr>
                                    <td><strong>Title</strong></td>
                                    <td>${problem.title}</td>
                                </tr>
                                <tr>
                                    <td><strong>Background</strong></td>
                                    <td>${problem.background}</td>
                                </tr>
                                <tr>
                                    <td><strong>Challenges</strong></td>
                                    <td>${problem.challenges}</td>
                                </tr>
                                <tr>
                                    <td><strong>Expected Solution</strong></td>
                                    <td>${problem.solutions}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                `;

                problemsContainer.appendChild(problemItem);
            });
        }
    });

    // Domain-level accordion handlers
    const domainHeaders = container.querySelectorAll('.domain-header');
    domainHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isActive = currentItem.classList.contains('active');

            // Close all domain items
            container.querySelectorAll('.domain-item').forEach(item => {
                item.classList.remove('active');
                const content = item.querySelector('.domain-content');
                content.style.maxHeight = null;

                // Close all problem items within
                item.querySelectorAll('.problem-item').forEach(problemItem => {
                    problemItem.classList.remove('active');
                    const problemContent = problemItem.querySelector('.problem-content');
                    problemContent.style.maxHeight = null;
                });
            });

            // Open clicked domain if it wasn't active
            if (!isActive) {
                currentItem.classList.add('active');
                const content = currentItem.querySelector('.domain-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Problem-level accordion handlers
    const problemHeaders = container.querySelectorAll('.problem-header');
    problemHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent domain accordion from triggering

            const currentItem = header.parentElement;
            const isActive = currentItem.classList.contains('active');
            const domainItem = currentItem.closest('.domain-item');
            const problemsContainer = currentItem.parentElement.parentElement;

            // Close all problem items in this domain
            problemsContainer.querySelectorAll('.problem-item').forEach(item => {
                item.classList.remove('active');
                const content = item.querySelector('.problem-content');
                content.style.maxHeight = null;
            });

            // Open clicked problem if it wasn't active
            if (!isActive) {
                currentItem.classList.add('active');
                const content = currentItem.querySelector('.problem-content');
                content.style.maxHeight = content.scrollHeight + 'px';

                // Update parent domain height
                const domainContent = domainItem.querySelector('.domain-content');
                domainContent.style.maxHeight = domainContent.scrollHeight + content.scrollHeight + 'px';
            } else {
                // Update parent domain height when closing
                const domainContent = domainItem.querySelector('.domain-content');
                domainContent.style.maxHeight = domainContent.scrollHeight + 'px';
            }
        });
    });
}

// ==========================================
// Navigation
// ==========================================

function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Smooth scroll
    navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 22, 40, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 22, 40, 0.95)';
        }
    });
}

// ==========================================
// Registration Deadline Countdown (Hero)
// ==========================================

function initRegistrationCountdown() {
    const timerEl = document.getElementById('deadlineTimer');
    if (!timerEl) return;

    // Deadline: 10 Feb 2026, 11:59:59 PM (local time)
    const deadline = new Date('2026-02-10T23:59:59');

    function pad2(n) {
        return String(n).padStart(2, '0');
    }

    function render() {
        const now = new Date();
        const diffMs = deadline.getTime() - now.getTime();

        if (Number.isNaN(deadline.getTime())) {
            timerEl.textContent = 'Invalid deadline date';
            timerEl.classList.add('expired');
            return;
        }

        if (diffMs <= 0) {
            timerEl.textContent = 'Registration closed';
            timerEl.classList.add('expired');
            return;
        }

        const totalSeconds = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        timerEl.classList.remove('expired');
        timerEl.textContent = `${days}D ${pad2(hours)}H ${pad2(minutes)}M ${pad2(seconds)}S`;
    }

    render();
    setInterval(render, 1000);
}

// ==========================================
// Dynamic Background Animation System
// ==========================================

class ParticleBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.connectionDistance = 150;
        this.mouse = { x: null, y: null, radius: 150 };

        this.setupCanvas();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }

    setupCanvas() {
        this.canvas.id = 'particle-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '0';
        this.canvas.style.pointerEvents = 'none';
        document.body.insertBefore(this.canvas, document.body.firstChild);

        this.resizeCanvas();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resizeCanvas());

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: this.getRandomColor()
            });
        }
    }

    getRandomColor() {
        const colors = [
            'rgba(99, 102, 241, 0.6)',   // purple
            'rgba(59, 130, 246, 0.6)',   // blue
            'rgba(6, 182, 212, 0.6)',    // cyan
            'rgba(20, 184, 166, 0.6)'    // teal
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    drawParticle(particle) {
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = particle.color;
        this.ctx.fill();

        // Add glow effect
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = particle.color;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
    }

    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    const opacity = 1 - (distance / this.connectionDistance);
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.3})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }

            // Connect to mouse
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.particles[i].x - this.mouse.x;
                const dy = this.particles[i].y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    const opacity = 1 - (distance / this.mouse.radius);
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.5})`;
                    this.ctx.lineWidth = 2;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            }
        }
    }

    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Mouse interaction
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    particle.vx -= Math.cos(angle) * force * 0.2;
                    particle.vy -= Math.sin(angle) * force * 0.2;
                }
            }

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
                particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
                particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
            }

            // Damping
            particle.vx *= 0.99;
            particle.vy *= 0.99;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.updateParticles();
        this.connectParticles();
        this.particles.forEach(particle => this.drawParticle(particle));

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// Wave Animation for Sections
// ==========================================

class WaveAnimation {
    constructor() {
        this.createWaveElements();
    }

    createWaveElements() {
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            if (index % 2 === 0) {
                const wave = document.createElement('div');
                wave.className = 'animated-wave';
                wave.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    pointer-events: none;
                    z-index: 0;
                `;

                const svg = `
                    <svg viewBox="0 0 1440 320" style="position: absolute; bottom: 0; width: 100%; height: auto; opacity: 0.1;">
                        <path fill="url(#gradient)" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
                                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,112C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                        </path>
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:rgb(99,102,241);stop-opacity:1" />
                                <stop offset="100%" style="stop-color:rgb(6,182,212);stop-opacity:1" />
                            </linearGradient>
                        </defs>
                    </svg>
                `;

                wave.innerHTML = svg;
                section.style.position = 'relative';
                section.insertBefore(wave, section.firstChild);
            }
        });
    }
}

// ==========================================
// Floating Elements Animation
// ==========================================

class FloatingElements {
    constructor() {
        this.createFloatingShapes();
    }

    createFloatingShapes() {
        const container = document.createElement('div');
        container.className = 'floating-shapes';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            z-index: 0;
        `;

        // Create various floating shapes
        for (let i = 0; i < 15; i++) {
            const shape = document.createElement('div');
            const size = Math.random() * 60 + 20;
            const delay = Math.random() * 10;
            const duration = Math.random() * 20 + 15;
            const startX = Math.random() * 100;
            const endX = Math.random() * 100;

            shape.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: ${Math.random() > 0.5 ? '50%' : '10px'};
                background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(6, 182, 212, 0.05));
                border: 2px solid rgba(99, 102, 241, 0.1);
                left: ${startX}%;
                top: 100%;
                animation: float-up ${duration}s linear ${delay}s infinite;
            `;

            container.appendChild(shape);
        }

        document.body.appendChild(container);

        // Add animation keyframes
        if (!document.getElementById('float-animation-styles')) {
            const style = document.createElement('style');
            style.id = 'float-animation-styles';
            style.textContent = `
                @keyframes float-up {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.3;
                    }
                    90% {
                        opacity: 0.3;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// ==========================================
// Enhanced Hero Section Particles
// ==========================================

class HeroParticles {
    constructor() {
        this.createHeroParticles();
    }

    createHeroParticles() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const container = document.createElement('div');
        container.className = 'hero-particles';
        container.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            z-index: 1;
        `;

        // Create code-like floating elements
        const codeSnippets = ['{ }', '< />', '01', '10', '///', '***', '===', '++', '&&', '||'];

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 40 + 15;
            const delay = Math.random() * 8;
            const duration = Math.random() * 15 + 10;
            const startX = Math.random() * 100;
            const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

            particle.textContent = snippet;
            particle.style.cssText = `
                position: absolute;
                font-family: 'Courier New', monospace;
                font-size: ${size}px;
                font-weight: bold;
                color: rgba(99, 102, 241, 0.2);
                left: ${startX}%;
                top: 100%;
                animation: float-up ${duration}s linear ${delay}s infinite;
                user-select: none;
            `;

            container.appendChild(particle);
        }

        // Create glowing orbs
        for (let i = 0; i < 10; i++) {
            const orb = document.createElement('div');
            const size = Math.random() * 100 + 50;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 8;
            const startX = Math.random() * 100;

            orb.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.05), transparent);
                left: ${startX}%;
                top: 100%;
                animation: float-up ${duration}s ease-in-out ${delay}s infinite;
                filter: blur(20px);
            `;

            container.appendChild(orb);
        }

        heroSection.insertBefore(container, heroSection.firstChild);
    }
}

// ==========================================
// Initialization
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initNavigation();

    // Create Hackathon Format accordion
    const formatAccordion = document.getElementById('formatAccordion');
    createAccordion(formatAccordion, formatData, 'simple');

    // Create Problem Statements accordion
    createProblemStatementsAccordion();

    // Create Organizing Committee accordion
    const committeeAccordion = document.getElementById('committeeAccordion');
    createAccordion(committeeAccordion, committeeData, 'simple');

    // Create FAQs accordion
    const faqsAccordion = document.getElementById('faqsAccordion');
    createAccordion(faqsAccordion, faqsData, 'simple');

    // Create Announcements accordion
    const announcementsAccordion = document.getElementById('announcementsAccordion');
    if (announcementsAccordion) {
        createAccordion(announcementsAccordion, announcementsData, 'simple');
    }

    // Registration deadline countdown (Home section)
    initRegistrationCountdown();

    // Initialize dynamic background animations - now handled by new-animations.js
    // new ParticleBackground();
    // new WaveAnimation();
    // new FloatingElements();
    // new HeroParticles();
});
