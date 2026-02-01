// COMPLETE Glossary Data - ALL 86 Terms
const glossaryData = [
    {
        id: 1,
        term: "Akkio",
        definition: "A no-code AI platform allows users to create and deploy predictive models and generate reports.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🚀 No-Code AI Platform</div>
                <p>Build a predictive model without writing code:</p>
                <div style="margin: 10px 0;">
                    <select id="akkioDataset" style="padding: 6px; border-radius: 4px; width: 100%; margin-bottom: 10px;">
                        <option value="churn">Customer Churn Prediction</option>
                        <option value="sales">Sales Forecasting</option>
                        <option value="fraud">Fraud Detection</option>
                    </select>
                    <button onclick="runAkkioDemo()" class="control-btn">Build AI Model</button>
                </div>
                <div id="akkioResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Model Created!</strong>
                    <p>Accuracy: 87% | Ready for deployment</p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        term: "Algorithmic Bias",
        definition: "Bias occurring when machine learning models produce biased results due to biased training data or algorithm design.",
        category: "bias",
        example: `
            <div class="example-demo">
                <div class="demo-title">⚖️ Algorithmic Bias Detection</div>
                <p>Test a biased loan approval system:</p>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Applicant</th>
                            <th>Credit Score</th>
                            <th>Income</th>
                            <th>Approved</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Applicant A</td><td>720</td><td>$85K</td><td>✅ Yes</td></tr>
                        <tr><td>Applicant B</td><td>715</td><td>$82K</td><td>❌ No</td></tr>
                        <tr><td>Applicant C</td><td>705</td><td>$90K</td><td>✅ Yes</td></tr>
                    </tbody>
                </table>
                <button onclick="detectBias()" class="control-btn">Detect Bias</button>
                <div id="biasResult" style="display:none; padding: 12px; background: #fff3cd; border-radius: 8px; margin-top: 10px;">
                    <strong>⚠️ Bias Detected!</strong>
                    <p>System shows inconsistent approval patterns.</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        term: "Alteryx",
        definition: "AI tool used to connect to various data sources, blend the data, and apply cleansing operations such as removing duplicates and correcting errors.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔗 Data Blending Workflow</div>
                <p>Drag and drop to create data pipeline:</p>
                <div style="display: flex; gap: 8px; flex-wrap: wrap; margin: 10px 0;">
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; cursor: move;">CRM Data</div>
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; cursor: move;">ERP Data</div>
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; cursor: move;">Web Analytics</div>
                </div>
                <button onclick="runAlteryxWorkflow()" class="control-btn">Run Data Blend</button>
                <div id="alteryxResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Data Blended!</strong>
                    <p>3 datasets merged | 142 duplicates removed</p>
                </div>
            </div>
        `
    },
    {
        id: 4,
        term: "Anomaly Detection",
        definition: "The process of identifying observations, events, or data points that deviate from the usual, standard, or expected behavior within a data set.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔍 Anomaly Detection</div>
                <p>Detect unusual patterns in transaction data:</p>
                <div class="visualization-container">
                    <canvas id="anomalyChart"></canvas>
                </div>
                <div class="live-example-controls">
                    <button onclick="addAnomaly()" class="control-btn">Add Transaction</button>
                    <button onclick="resetAnomalyChart()" class="control-btn">Reset</button>
                </div>
            </div>
        `
    },
    {
        id: 5,
        term: "Apache Kafka",
        definition: "A distributed streaming platform capable of handling a high volume of real-time data.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">⚡ Real-time Data Streaming</div>
                <p>Simulated Kafka data streams:</p>
                <div style="margin: 10px 0;">
                    <div style="display: flex; align-items: center; margin: 8px 0;">
                        <div style="width: 15px; height: 15px; background: #3498db; border-radius: 50%; margin-right: 8px;"></div>
                        <span>Web Clicks: <span id="clickCount">0</span>/sec</span>
                    </div>
                    <div style="display: flex; align-items: center; margin: 8px 0;">
                        <div style="width: 15px; height: 15px; background: #2ecc71; border-radius: 50%; margin-right: 8px;"></div>
                        <span>IoT Sensors: <span id="sensorCount">0</span>/sec</span>
                    </div>
                </div>
                <button onclick="startKafkaStream()" class="control-btn">Start Stream</button>
                <button onclick="stopKafkaStream()" class="control-btn">Stop</button>
            </div>
        `
    },
    {
        id: 6,
        term: "Ask Data",
        definition: "A feature in Tableau that allows asking questions from data using natural language.",
        category: "viz",
        example: `
            <div class="example-demo">
                <div class="demo-title">💬 Ask Data Interface</div>
                <div class="chat-interface">
                    <div class="chat-messages" id="askDataMessages">
                        <div class="message ai-message">
                            <strong>Ask Data:</strong> Ask me anything about your sales data.
                        </div>
                        <div class="message user-message">
                            <strong>You:</strong> What were top products last quarter?
                        </div>
                        <div class="message ai-message">
                            <strong>Ask Data:</strong> Top products: Laptop Pro ($45K), Headphones ($32K), Monitor ($28K)
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <input type="text" class="chat-input" id="askDataInput" placeholder="Ask a question...">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 7,
        term: "Automated Dashboard Creation",
        definition: "A process wherein once the AI tools have the data, they create a complete dashboard with related charts and visualizations.",
        category: "viz",
        example: `
            <div class="example-demo">
                <div class="demo-title">📊 Auto-generated Dashboard</div>
                <p>AI creates dashboard from your data:</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin: 10px 0;">
                    <div style="padding: 12px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.85rem; color: #666;">Revenue</div>
                        <div style="font-size: 1.3rem; font-weight: bold;">$245,820</div>
                    </div>
                    <div style="padding: 12px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.85rem; color: #666;">Customers</div>
                        <div style="font-size: 1.3rem; font-weight: bold;">1,245</div>
                    </div>
                </div>
                <button onclick="refreshDashboard()" class="control-btn">Refresh Dashboard</button>
            </div>
        `
    },
    {
        id: 8,
        term: "Automated Learning",
        definition: "The process of automatically learning and capturing the important features of your data.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🤖 Automated Feature Learning</div>
                <p>AI discovers important data features:</p>
                <div class="visualization-container">
                    <canvas id="featureChart"></canvas>
                </div>
                <div style="margin: 10px 0;">
                    <p><strong>AI Discovered:</strong> Customer tenure is the strongest predictor of churn.</p>
                </div>
                <button onclick="analyzeFeatures()" class="control-btn">Analyze Features</button>
            </div>
        `
    },
    {
        id: 9,
        term: "Automatic Data Visualization",
        definition: "A process whereby AI tools analyze data and recommend the most appropriate chart type to present insights effectively.",
        category: "viz",
        example: `
            <div class="example-demo">
                <div class="demo-title">📈 Smart Chart Recommendations</div>
                <p>AI suggests best chart for your data:</p>
                <select id="dataTypeSelect" onchange="recommendChart()" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                    <option value="">Select data type...</option>
                    <option value="timeseries">Time Series Data</option>
                    <option value="categories">Category Comparison</option>
                </select>
                <div id="chartRecommendation" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px;">
                    <strong>Recommendation:</strong> <span id="recommendedChart"></span>
                </div>
            </div>
        `
    },
    {
        id: 10,
        term: "Automatic Schema Understanding",
        definition: "Refers to comprehending and designing the structure, organization, and relationships of tables within a data set.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🗃️ Schema Analysis</div>
                <p>AI analyzes database structure:</p>
                <div style="margin: 10px 0; padding: 12px; background: #f8f9fa; border-radius: 8px;">
                    <p><strong>Detected Tables:</strong></p>
                    <p>• customers (15 columns)</p>
                    <p>• orders (8 columns)</p>
                    <p>• products (12 columns)</p>
                </div>
                <button onclick="analyzeSchema()" class="control-btn">Analyze Schema</button>
                <div id="schemaResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Schema Understood!</strong>
                    <p>Relationships mapped between all tables.</p>
                </div>
            </div>
        `
    },
    {
        id: 11,
        term: "Azure Cognitive Services",
        definition: "A collection of cloud-based APIs by Microsoft that use artificial intelligence (AI) to enhance user experiences.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">☁️ Azure AI Services</div>
                <p>Try AI capabilities from Azure:</p>
                <select id="azureService" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                    <option value="vision">Computer Vision</option>
                    <option value="language">Language Understanding</option>
                    <option value="speech">Speech Recognition</option>
                </select>
                <div style="margin: 10px 0;">
                    <textarea id="azureInput" placeholder="Enter text or image URL..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 60px;"></textarea>
                </div>
                <button onclick="runAzureService()" class="control-btn">Run Service</button>
                <div id="azureResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>Result:</strong> <span id="azureOutput"></span>
                </div>
            </div>
        `
    },
    {
        id: 12,
        term: "Bias",
        definition: "Systematic errors that lead to inaccurate, prejudiced, or unrepresentative insights.",
        category: "bias",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎯 Bias Types</div>
                <p>Explore different types of bias:</p>
                <select id="biasType" onchange="showBiasExample()" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                    <option value="">Select bias type...</option>
                    <option value="selection">Selection Bias</option>
                    <option value="measurement">Measurement Bias</option>
                    <option value="confirmation">Confirmation Bias</option>
                </select>
                <div id="biasExample" style="display:none; padding: 12px; background: #fff3cd; border-radius: 8px;">
                    <strong>Example:</strong> <span id="biasDesc"></span>
                </div>
            </div>
        `
    },
    {
        id: 13,
        term: "Business Intelligence (BI) Lifecycle",
        definition: "An iterative process that transforms data into actionable insights.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔄 BI Lifecycle</div>
                <p>Click through BI stages:</p>
                <div style="display: flex; flex-direction: column; gap: 8px; margin: 10px 0;">
                    <button onclick="showBIStage(1)" class="control-btn" style="text-align: left;">
                        1. Data Collection
                    </button>
                    <button onclick="showBIStage(2)" class="control-btn" style="text-align: left;">
                        2. Data Preparation
                    </button>
                    <button onclick="showBIStage(3)" class="control-btn" style="text-align: left;">
                        3. Data Analysis
                    </button>
                    <button onclick="showBIStage(4)" class="control-btn" style="text-align: left;">
                        4. Data Visualization
                    </button>
                </div>
                <div id="biStageDetail" style="display:none; padding: 12px; background: #f8f9fa; border-radius: 8px; margin-top: 10px;">
                    <strong>Stage:</strong> <span id="stageText"></span>
                </div>
            </div>
        `
    },
    {
        id: 14,
        term: "ChatGPT",
        definition: "OpenAI can help BI analysts craft compelling narratives based on data insights, draft initial reports, and write prompts for data analysis.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">✍️ ChatGPT for BI</div>
                <div class="chat-interface">
                    <div class="chat-messages" id="chatGPTMessages">
                        <div class="message ai-message">
                            <strong>ChatGPT:</strong> I can help write reports and analyze data.
                        </div>
                        <div class="message user-message">
                            <strong>You:</strong> Write sales report summary
                        </div>
                        <div class="message ai-message">
                            <strong>ChatGPT:</strong> Q3 sales increased 15% with strong performance in Western regions.
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <input type="text" class="chat-input" id="chatGPTInput" placeholder="Ask for report or analysis...">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 15,
        term: "Clustering",
        definition: "Unsupervised machine learning task of grouping similar data points together based on their characteristics or attributes to form groups.",
        category: "ml",
        example: `
            <div class="example-demo">
                <div class="demo-title">👥 Customer Clustering</div>
                <p>Adjust attributes to see cluster assignment:</p>
                <div style="margin: 10px 0;">
                    <div class="slider-container">
                        <label>Purchase Frequency: <span id="freqValue">12</span>/month</label>
                        <input type="range" min="1" max="30" value="12" oninput="updateCluster()" id="freqSlider">
                    </div>
                    <div class="slider-container">
                        <label>Order Value: $<span id="valueValue">120</span></label>
                        <input type="range" min="10" max="500" value="120" oninput="updateCluster()" id="valueSlider">
                    </div>
                </div>
                <div id="clusterResult" style="padding: 15px; text-align: center; font-weight: bold; border-radius: 8px; margin: 10px 0; background: #e3f2fd;">
                    Calculating...
                </div>
            </div>
        `
    },
    {
        id: 16,
        term: "Code Completion",
        definition: "Refers to when AI suggests relevant SQL keywords and functions as the script is written.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">💡 AI Code Completion</div>
                <p>Type SQL and get AI suggestions:</p>
                <div style="margin: 10px 0;">
                    <textarea id="sqlEditor" placeholder="Type SELECT..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 80px; font-family: monospace;"></textarea>
                </div>
                <button onclick="getCodeSuggestions()" class="control-btn">Get Suggestions</button>
                <div id="suggestions" style="display:none; padding: 12px; background: #2c3e50; color: white; border-radius: 8px; margin-top: 10px; font-family: monospace;">
                    <strong>AI Suggestions:</strong>
                    <p>• SELECT customer_id, first_name, last_name</p>
                    <p>• FROM customers</p>
                    <p>• WHERE status = 'active'</p>
                </div>
            </div>
        `
    },
    {
        id: 17,
        term: "Confirmation Bias",
        definition: "Bias referring to analysts interpreting data to confirm existing beliefs leading to the selective use of data that supports a desired outcome.",
        category: "bias",
        example: `
            <div class="example-demo">
                <div class="demo-title">🧠 Confirmation Bias Test</div>
                <p>Do you see what you expect to see?</p>
                <div style="margin: 10px 0; padding: 12px; background: #f8f9fa; border-radius: 8px;">
                    <p>Data shows: 60% success rate for new feature</p>
                    <p>But: 40% of users abandon after first use</p>
                </div>
                <div style="margin: 10px 0;">
                    <button onclick="showBiasedView()" class="control-btn">Show Biased View</button>
                    <button onclick="showCompleteView()" class="control-btn">Show Complete View</button>
                </div>
                <div id="biasAnalysis" style="display:none; padding: 12px; background: #fff3cd; border-radius: 8px; margin-top: 10px;">
                    <strong>Analysis:</strong> <span id="analysisText"></span>
                </div>
            </div>
        `
    },
    {
        id: 18,
        term: "Comprehensive Ethical AI Frameworks",
        definition: "Sets of guidelines and principles designed to address ethical concerns such as fairness, accountability, transparency, privacy, and safety.",
        category: "bias",
        example: `
            <div class="example-demo">
                <div class="demo-title">📜 Ethical AI Framework</div>
                <p>Evaluate AI system against ethical principles:</p>
                <div style="margin: 10px 0;">
                    <div class="progress-bar">
                        <div id="fairnessBar" class="progress-fill" style="width: 75%"></div>
                    </div>
                    <div>Fairness: 75%</div>
                    
                    <div class="progress-bar">
                        <div id="transparencyBar" class="progress-fill" style="width: 60%"></div>
                    </div>
                    <div>Transparency: 60%</div>
                    
                    <div class="progress-bar">
                        <div id="privacyBar" class="progress-fill" style="width: 85%"></div>
                    </div>
                    <div>Privacy: 85%</div>
                </div>
                <button onclick="runEthicalAssessment()" class="control-btn">Run Ethical Assessment</button>
            </div>
        `
    },
    {
        id: 19,
        term: "Copilot",
        definition: "Microsoft tool that integrates with Microsoft products and helps BI professionals through its natural language processing capabilities in data analysis, data visualization, and reporting.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🤝 Microsoft Copilot</div>
                <div class="chat-interface">
                    <div class="chat-messages" id="copilotMessages">
                        <div class="message ai-message">
                            <strong>Copilot:</strong> I can help with Excel formulas, Power BI, and data analysis.
                        </div>
                        <div class="message user-message">
                            <strong>You:</strong> Create sales trend chart
                        </div>
                        <div class="message ai-message">
                            <strong>Copilot:</strong> I'll create a line chart showing monthly sales trends in Power BI.
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <input type="text" class="chat-input" id="copilotInput" placeholder="Ask for help with Microsoft tools...">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 20,
        term: "Correlation Analysis",
        definition: "A statistical method used to determine if there is a relationship between two variables and how strong the relationship is.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">📊 Correlation Analysis</div>
                <p>Analyze relationship between variables:</p>
                <div class="visualization-container">
                    <canvas id="correlationChart"></canvas>
                </div>
                <div style="margin: 10px 0;">
                    <p><strong>Correlation Coefficient:</strong> <span id="correlationValue">0.00</span></p>
                    <p id="correlationStrength">No relationship</p>
                </div>
                <div class="live-example-controls">
                    <button onclick="updateCorrelation(0.8)" class="control-btn">Strong Positive</button>
                    <button onclick="updateCorrelation(-0.6)" class="control-btn">Negative</button>
                    <button onclick="updateCorrelation(0.1)" class="control-btn">Weak</button>
                </div>
            </div>
        `
    },
    {
        id: 21,
        term: "Cost-based Optimization",
        definition: "The technique of database query optimization to ensure the effective execution of the SQL script and reduce query execution time.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">⚡ Query Optimization</div>
                <p>Optimize SQL query performance:</p>
                <div style="margin: 10px 0; padding: 12px; background: #f8f9fa; border-radius: 8px; font-family: monospace;">
                    SELECT * FROM customers<br>
                    JOIN orders ON customers.id = orders.customer_id<br>
                    WHERE order_date > '2023-01-01'
                </div>
                <button onclick="optimizeQuery()" class="control-btn">Optimize Query</button>
                <div id="optimizationResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Optimized!</strong>
                    <p>Execution time reduced from 2.3s to 0.4s</p>
                </div>
            </div>
        `
    },
    {
        id: 22,
        term: "Data Analysis",
        definition: "The process of collecting, modeling, and analyzing data using various statistical and logical methods and techniques.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">📈 Data Analysis Process</div>
                <p>Analyze sample sales data:</p>
                <div style="margin: 10px 0;">
                    <table class="data-table">
                        <tr><th>Month</th><th>Sales</th><th>Growth</th></tr>
                        <tr><td>Jan</td><td>$85,000</td><td>+5%</td></tr>
                        <tr><td>Feb</td><td>$92,000</td><td>+8%</td></tr>
                        <tr><td>Mar</td><td>$105,000</td><td>+14%</td></tr>
                    </table>
                </div>
                <button onclick="runAnalysis()" class="control-btn">Run Analysis</button>
                <div id="analysisResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>Analysis Results:</strong>
                    <p>• Average monthly growth: 9%</p>
                    <p>• Total Q1 sales: $282,000</p>
                    <p>• Projected Q2: $307,000</p>
                </div>
            </div>
        `
    },
    {
        id: 23,
        term: "Data Cleansing and Preparation",
        definition: "The process of fixing or removing incorrect, corrupted, incorrectly formatted, duplicate, or incomplete data within a data set.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🧹 Data Cleaning</div>
                <p>Clean messy customer data:</p>
                <div style="margin: 10px 0;">
                    <div style="display: flex; justify-content: space-between; padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <span>Missing Values</span>
                        <span id="missingCount" style="background: #f39c12; color: white; padding: 2px 8px; border-radius: 10px;">245</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <span>Duplicates</span>
                        <span id="duplicateCount" style="background: #f39c12; color: white; padding: 2px 8px; border-radius: 10px;">102</span>
                    </div>
                </div>
                <button onclick="cleanData()" class="control-btn">Clean Data</button>
                <div id="cleanResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Data Cleaned!</strong>
                    <p>Quality improved from 72% to 96%</p>
                </div>
            </div>
        `
    },
    {
        id: 24,
        term: "Data Collection",
        definition: "Systematic process of gathering and recording information from various sources for analysis, interpretation, and decision making.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">📥 Data Collection Sources</div>
                <p>Collect data from multiple sources:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0;">
                        ✅ Web Analytics (Google Analytics)
                    </div>
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0;">
                        ✅ CRM (Salesforce)
                    </div>
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0;">
                        ✅ Transaction Database
                    </div>
                </div>
                <button onclick="collectData()" class="control-btn">Collect Data</button>
                <div id="collectionResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Data Collected!</strong>
                    <p>45,238 records collected from 3 sources</p>
                </div>
            </div>
        `
    },
    {
        id: 25,
        term: "Data Lineage",
        definition: "A process of tracking the flow of data over time, providing a clear understanding of where the data originated, how it has changed, and its ultimate destination within the data pipeline.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔄 Data Lineage Tracking</div>
                <p>Track data from source to dashboard:</p>
                <div style="margin: 10px 0; padding: 12px; background: #f8f9fa; border-radius: 8px;">
                    <p><strong>Data Flow:</strong></p>
                    <p>CRM → Data Warehouse → ETL Process → BI Dashboard</p>
                </div>
                <button onclick="showLineage()" class="control-btn">Show Lineage</button>
                <div id="lineageResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>Data Lineage:</strong>
                    <p>Source: customers.csv</p>
                    <p>Transformations: Cleaned, aggregated</p>
                    <p>Destination: sales_dashboard</p>
                </div>
            </div>
        `
    },
    {
        id: 26,
        term: "Data Mapping",
        definition: "Refers to when AI tools provide a data point overview.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🗺️ Data Mapping</div>
                <p>Map data points between systems:</p>
                <div style="margin: 10px 0;">
                    <table class="data-table">
                        <tr><th>Source Field</th><th>→</th><th>Target Field</th></tr>
                        <tr><td>cust_name</td><td>→</td><td>customer_name</td></tr>
                        <tr><td>purchase_date</td><td>→</td><td>order_date</td></tr>
                        <tr><td>item_price</td><td>→</td><td>product_price</td></tr>
                    </table>
                </div>
                <button onclick="mapData()" class="control-btn">Map Data</button>
                <div id="mappingResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Data Mapped!</strong>
                    <p>15 fields mapped successfully</p>
                </div>
            </div>
        `
    },
    {
        id: 27,
        term: "Data Profiling",
        definition: "Process of reviewing and analyzing data sets to understand their structure and information.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">📋 Data Profiling</div>
                <p>Profile customer dataset:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Dataset:</strong> customers.csv
                    </div>
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Rows:</strong> 45,238
                    </div>
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Columns:</strong> 12
                    </div>
                </div>
                <button onclick="profileData()" class="control-btn">Run Profiling</button>
                <div id="profileResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>Profile Complete:</strong>
                    <p>• 5% missing values</p>
                    <p>• 2% duplicates</p>
                    <p>• Data types validated</p>
                </div>
            </div>
        `
    },
    {
        id: 28,
        term: "Data Reporting",
        definition: "Systematic process of presenting information in a meaningful and accessible format.",
        category: "viz",
        example: `
            <div class="example-demo">
                <div class="demo-title">📄 Automated Reporting</div>
                <p>Generate automated reports:</p>
                <select id="reportType" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                    <option value="sales">Sales Report</option>
                    <option value="customer">Customer Report</option>
                    <option value="financial">Financial Report</option>
                </select>
                <button onclick="generateReport()" class="control-btn">Generate Report</button>
                <div id="reportResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Report Generated!</strong>
                    <p>Download: Q3_Sales_Report.pdf</p>
                </div>
            </div>
        `
    },
    {
        id: 29,
        term: "Data Type Inference",
        definition: "Refers to when the AI tool automatically infers the data type of columns within tables.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔍 Data Type Inference</div>
                <p>AI infers column data types:</p>
                <div style="margin: 10px 0;">
                    <table class="data-table">
                        <tr><th>Column</th><th>Sample Data</th><th>Inferred Type</th></tr>
                        <tr><td>customer_id</td><td>1001, 1002, 1003</td><td id="type1">Detecting...</td></tr>
                        <tr><td>order_date</td><td>2023-10-15, 2023-10-16</td><td id="type2">Detecting...</td></tr>
                        <tr><td>amount</td><td>$125.50, $89.99</td><td id="type3">Detecting...</td></tr>
                    </table>
                </div>
                <button onclick="inferDataTypes()" class="control-btn">Infer Types</button>
            </div>
        `
    },
    {
        id: 30,
        term: "Data Visualization",
        definition: "Graphical representation of information and data using visual elements such as charts, graphs, and maps.",
        category: "viz",
        example: `
            <div class="example-demo">
                <div class="demo-title">📊 Visualization Types</div>
                <p>Choose visualization type:</p>
                <div style="display: flex; gap: 8px; margin: 10px 0;">
                    <button onclick="showChart('bar')" class="control-btn">Bar Chart</button>
                    <button onclick="showChart('line')" class="control-btn">Line Chart</button>
                    <button onclick="showChart('pie')" class="control-btn">Pie Chart</button>
                </div>
                <div class="visualization-container">
                    <canvas id="vizChart"></canvas>
                </div>
            </div>
        `
    },
    {
        id: 31,
        term: "Database Schema Analysis",
        definition: "A process where AI helps querying structures to estimate the execution cost of different query plans.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🗄️ Schema Analysis</div>
                <p>Analyze query performance:</p>
                <div style="margin: 10px 0; padding: 12px; background: #f8f9fa; border-radius: 8px; font-family: monospace;">
                    SELECT * FROM large_table<br>
                    WHERE date > '2023-01-01'
                </div>
                <button onclick="analyzeSchemaPerformance()" class="control-btn">Analyze Performance</button>
                <div id="schemaPerformance" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>Analysis:</strong>
                    <p>• Estimated rows: 45,238</p>
                    <p>• Index recommendation: date_index</p>
                    <p>• Cost: 2.3 → 0.4 (optimized)</p>
                </div>
            </div>
        `
    },
    {
        id: 32,
        term: "DataRobot",
        definition: "AI tool that analyzes the data characteristics, evaluates the different clustering models available, and chooses the model most suitable for the data.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🤖 DataRobot AutoML</div>
                <p>Automated model selection:</p>
                <div style="margin: 10px 0;">
                    <select id="datarobotTask" style="padding: 6px; border-radius: 4px; width: 100%; margin-bottom: 10px;">
                        <option value="clustering">Customer Segmentation</option>
                        <option value="regression">Sales Prediction</option>
                        <option value="classification">Churn Prediction</option>
                    </select>
                    <button onclick="runDataRobot()" class="control-btn">Run AutoML</button>
                </div>
                <div id="datarobotResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Model Selected!</strong>
                    <p>Best model: Random Forest (Accuracy: 89%)</p>
                </div>
            </div>
        `
    },
    {
        id: 33,
        term: "Dummy Customer",
        definition: "Mimic real customer behavior, but not a copy of any real person, thereby safeguarding customer privacy.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">👤 Synthetic Customer Data</div>
                <p>Generate synthetic customer profiles:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Customer:</strong> John Smith
                    </div>
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Age:</strong> 35
                    </div>
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Location:</strong> New York, NY
                    </div>
                </div>
                <button onclick="generateDummyCustomer()" class="control-btn">Generate Customer</button>
                <div id="dummyResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Synthetic Data Generated!</strong>
                    <p>Privacy-safe customer profile created</p>
                </div>
            </div>
        `
    },
    {
        id: 34,
        term: "Explainable AI",
        definition: "Techniques and processes that make decisions of AI models understandable to humans.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔍 Explainable AI</div>
                <p>Understand why AI made a decision:</p>
                <div style="margin: 10px 0; padding: 12px; background: #f8f9fa; border-radius: 8px;">
                    <p><strong>AI Decision:</strong> Deny loan application</p>
                    <p><strong>Confidence:</strong> 87%</p>
                </div>
                <button onclick="explainDecision()" class="control-btn">Explain Decision</button>
                <div id="explanation" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>Explanation:</strong>
                    <p>• Credit score: 620 (below threshold)</p>
                    <p>• Debt-to-income ratio: 45% (high)</p>
                    <p>• Employment length: 6 months (short)</p>
                </div>
            </div>
        `
    },
    {
        id: 35,
        term: "Federated Learning Approach",
        definition: "A system by which models across decentralized data sources are trained and updates shared, enhancing privacy and diversity in training data.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🌐 Federated Learning</div>
                <p>Train AI model across multiple locations:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0;">
                        ✅ Hospital A (Local training)
                    </div>
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0;">
                        ✅ Hospital B (Local training)
                    </div>
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0;">
                        ✅ Hospital C (Local training)
                    </div>
                </div>
                <button onclick="runFederatedLearning()" class="control-btn">Run Federated Training</button>
                <div id="federatedResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Federated Learning Complete!</strong>
                    <p>Model accuracy: 92% | Data privacy maintained</p>
                </div>
            </div>
        `
    },
    {
        id: 36,
        term: "Gamma.app",
        definition: "An AI-powered platform designed for creating various types of content, including presentations, documents, and websites.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎨 Gamma.app Content Creation</div>
                <p>Create content with AI:</p>
                <select id="gammaContent" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                    <option value="presentation">Presentation</option>
                    <option value="document">Document</option>
                    <option value="website">Webpage</option>
                </select>
                <div style="margin: 10px 0;">
                    <textarea id="gammaInput" placeholder="Enter topic or content..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 60px;"></textarea>
                </div>
                <button onclick="generateGammaContent()" class="control-btn">Generate Content</button>
                <div id="gammaResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Content Created!</strong>
                    <p>10-slide presentation generated on topic</p>
                </div>
            </div>
        `
    },
    {
        id: 37,
        term: "Gemini",
        definition: "Google tool for data storytelling with conversational abilities that could be leveraged for brainstorming and generating ideas.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">💎 Google Gemini</div>
                <div class="chat-interface">
                    <div class="chat-messages" id="geminiMessages">
                        <div class="message ai-message">
                            <strong>Gemini:</strong> I can help brainstorm ideas and tell stories with data.
                        </div>
                        <div class="message user-message">
                            <strong>You:</strong> Brainstorm marketing campaign ideas
                        </div>
                        <div class="message ai-message">
                            <strong>Gemini:</strong> 1. Social media influencer collaboration<br>2. Limited-time discount campaign<br>3. Customer referral program
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <input type="text" class="chat-input" id="geminiInput" placeholder="Ask for brainstorming or storytelling...">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 38,
        term: "Generative Adversarial Network (GAN)",
        definition: "Type of generative model that includes two neural networks: generator and discriminator.",
        category: "ml",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎭 GAN Training</div>
                <p>Train generator vs discriminator:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0;">
                        <strong>Generator:</strong> Creating synthetic images
                    </div>
                    <div style="padding: 8px; background: #fff3cd; border-radius: 8px; margin: 5px 0;">
                        <strong>Discriminator:</strong> Detecting real vs fake
                    </div>
                </div>
                <button onclick="trainGAN()" class="control-btn">Train GAN</button>
                <div id="ganResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ GAN Trained!</strong>
                    <p>Generator accuracy: 85% | Discriminator accuracy: 78%</p>
                </div>
            </div>
        `
    },
    {
        id: 39,
        term: "Generative AI (GenAI)",
        definition: "Type of AI that can generate new content like text, images, music, audio, and videos using generative models.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎨 Generative AI</div>
                <p>Generate content with GenAI:</p>
                <select id="genaiType" onchange="showGenAIOption()" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                    <option value="">Select content type...</option>
                    <option value="text">Text Generation</option>
                    <option value="image">Image Generation</option>
                    <option value="code">Code Generation</option>
                </select>
                <div id="genaiInputArea" style="display:none; margin: 10px 0;">
                    <textarea id="genaiPrompt" placeholder="Enter prompt..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 60px;"></textarea>
                </div>
                <button onclick="generateContent()" class="control-btn" id="genaiButton" style="display:none;">Generate</button>
                <div id="genaiResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>Generated Content:</strong>
                    <p id="genaiOutput"></p>
                </div>
            </div>
        `
    },
    {
        id: 40,
        term: "Gretel.ai",
        definition: "A synthetic data platform that creates synthetic versions of existing data in minutes and can anonymize and enrich data.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔐 Gretel.ai Synthetic Data</div>
                <p>Create synthetic data from real data:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Original Data:</strong> 45,238 customer records
                    </div>
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Privacy Level:</strong> High (k-anonymity: 5)
                    </div>
                </div>
                <button onclick="generateSyntheticData()" class="control-btn">Generate Synthetic Data</button>
                <div id="syntheticResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Synthetic Data Generated!</strong>
                    <p>45,238 synthetic records created | Privacy preserved</p>
                </div>
            </div>
        `
    },
    {
        id: 41,
        term: "H2O.ai",
        definition: "Software company that provides open-source and proprietary tools for machine learning and AI.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">💧 H2O.ai AutoML</div>
                <p>Automated machine learning platform:</p>
                <div style="margin: 10px 0;">
                    <select id="h2oTask" style="padding: 6px; border-radius: 4px; width: 100%; margin-bottom: 10px;">
                        <option value="classification">Classification</option>
                        <option value="regression">Regression</option>
                        <option value="clustering">Clustering</option>
                    </select>
                    <button onclick="runH2O()" class="control-btn">Run H2O AutoML</button>
                </div>
                <div id="h2oResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ H2O AutoML Complete!</strong>
                    <p>Best model: Gradient Boosting (AUC: 0.92)</p>
                </div>
            </div>
        `
    },
    {
        id: 42,
        term: "Hazy",
        definition: "A generative AI-based tool that helps businesses generate synthetic data that can be safely used for testing, analytics, and AI training.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🌀 Hazy Synthetic Data</div>
                <p>Generate privacy-preserving synthetic data:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Data Type:</strong> Customer Transactions
                    </div>
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Records:</strong> 10,000
                    </div>
                </div>
                <button onclick="generateHazyData()" class="control-btn">Generate with Hazy</button>
                <div id="hazyResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Hazy Data Generated!</strong>
                    <p>Synthetic dataset ready for testing and analytics</p>
                </div>
            </div>
        `
    },
    {
        id: 43,
        term: "IBM Cognos Analytics",
        definition: "Web-based intelligence suite powered by IBM watsonx, it offers an embedded assistant that allows users to input text to generate insights.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔵 IBM Cognos Analytics</div>
                <div class="chat-interface">
                    <div class="chat-messages" id="cognosMessages">
                        <div class="message ai-message">
                            <strong>Cognos Assistant:</strong> I can help analyze your business data.
                        </div>
                        <div class="message user-message">
                            <strong>You:</strong> Show me sales trends
                        </div>
                        <div class="message ai-message">
                            <strong>Cognos Assistant:</strong> Sales increased 15% last quarter. Top product: Laptop Pro.
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <input type="text" class="chat-input" id="cognosInput" placeholder="Ask for business insights...">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 44,
        term: "IBM Watson Discovery",
        definition: "Intelligent document processing engine that helps to gain insights from complex business documents.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔍 Watson Discovery</div>
                <p>Extract insights from documents:</p>
                <div style="margin: 10px 0;">
                    <select id="documentType" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                        <option value="contract">Contract Document</option>
                        <option value="report">Business Report</option>
                        <option value="email">Email Thread</option>
                    </select>
                    <button onclick="processDocument()" class="control-btn">Process Document</button>
                </div>
                <div id="discoveryResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Insights Extracted!</strong>
                    <p>• Key terms identified</p>
                    <p>• Entities recognized</p>
                    <p>• Sentiment analyzed</p>
                </div>
            </div>
        `
    },
    {
        id: 45,
        term: "Image Recognition",
        definition: "A software's ability to identify and classify people, objects, places, writing, and actions in digital images and video.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🖼️ Image Recognition</div>
                <p>Upload or describe an image:</p>
                <div style="margin: 10px 0;">
                    <select id="imageType" onchange="showImageExample()" style="padding: 6px; border-radius: 4px; width: 100%;">
                        <option value="">Select image type...</option>
                        <option value="product">Product Image</option>
                        <option value="document">Document Image</option>
                        <option value="scene">Scene Image</option>
                    </select>
                </div>
                <div id="imageExample" style="display:none; margin: 10px 0;">
                    <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; text-align: center;">
                        <div style="font-size: 3rem;">🖼️</div>
                        <p>Sample image loaded</p>
                    </div>
                </div>
                <button onclick="recognizeImage()" class="control-btn" id="recognizeButton" style="display:none;">Recognize Image</button>
                <div id="recognitionResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>Recognition Results:</strong>
                    <p id="recognitionText"></p>
                </div>
            </div>
        `
    },
    {
        id: 46,
        term: "Imputing Data",
        definition: "BI technique that involves filling in missing values with estimated values.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔢 Data Imputation</div>
                <p>Fill missing values in dataset:</p>
                <div style="margin: 10px 0;">
                    <table class="data-table">
                        <tr><th>Customer</th><th>Age</th><th>Status</th></tr>
                        <tr><td>John</td><td>35</td><td>Active</td></tr>
                        <tr><td>Sarah</td><td>?</td><td>Active</td></tr>
                        <tr><td>Mike</td><td>42</td><td>?</td></tr>
                    </table>
                </div>
                <button onclick="imputeData()" class="control-btn">Impute Missing Values</button>
                <div id="imputationResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Data Imputed!</strong>
                    <p>Missing age: 38 (mean imputation)</p>
                    <p>Missing status: Active (mode imputation)</p>
                </div>
            </div>
        `
    },
    {
        id: 47,
        term: "Index Recommendation",
        definition: "Process wherein AI suggests creating indexes on frequently used columns to speed up data retrieval.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">⚡ Index Recommendations</div>
                <p>Analyze queries for index suggestions:</p>
                <div style="margin: 10px 0; padding: 12px; background: #f8f9fa; border-radius: 8px; font-family: monospace;">
                    SELECT * FROM customers<br>
                    WHERE email = 'test@example.com'<br>
                    ORDER BY created_date DESC
                </div>
                <button onclick="recommendIndex()" class="control-btn">Recommend Indexes</button>
                <div id="indexResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Index Recommendations:</strong>
                    <p>1. CREATE INDEX idx_email ON customers(email)</p>
                    <p>2. CREATE INDEX idx_date ON customers(created_date)</p>
                    <p>Estimated improvement: 85% faster queries</p>
                </div>
            </div>
        `
    },
    {
        id: 48,
        term: "Infogram",
        definition: "An infographics platform that leverages AI to revolutionize data visualization and sharing.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">📊 Infogram Visualization</div>
                <p>Create infographics with data:</p>
                <div style="margin: 10px 0;">
                    <select id="infogramType" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                        <option value="infographic">Infographic</option>
                        <option value="chart">Interactive Chart</option>
                        <option value="map">Map Visualization</option>
                    </select>
                    <button onclick="createInfogram()" class="control-btn">Create Visualization</button>
                </div>
                <div id="infogramResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px; text-align: center;">
                    <div style="font-size: 2rem;">📈</div>
                    <strong>✅ Infographic Created!</strong>
                    <p>Interactive visualization ready for sharing</p>
                </div>
            </div>
        `
    },
    {
        id: 49,
        term: "Intelligent Auto-completion",
        definition: "Refers to when AI tools suggest relevant keywords, functions, and even additional expressions as you write SQL code.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">💡 Intelligent SQL Auto-complete</div>
                <p>Type SQL and get AI suggestions:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0; font-family: monospace;">
                        SELECT cust<span id="suggestion">...</span>
                    </div>
                </div>
                <button onclick="showSuggestions()" class="control-btn">Show Suggestions</button>
                <div id="autoCompleteResult" style="display:none; padding: 12px; background: #2c3e50; color: white; border-radius: 8px; margin-top: 10px; font-family: monospace;">
                    <strong>AI Suggestions:</strong>
                    <p>• customer_id</p>
                    <p>• customer_name</p>
                    <p>• customer_email</p>
                    <p>• FROM customers</p>
                </div>
            </div>
        `
    },
    {
        id: 50,
        term: "Interactive Data Visualization",
        definition: "Method of presenting complex data sets in an engaging and comprehensible manner using dynamic visuals.",
        category: "viz",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎮 Interactive Visualization</div>
                <p>Interactive sales dashboard:</p>
                <div class="visualization-container">
                    <canvas id="interactiveChart"></canvas>
                </div>
                <div style="margin: 10px 0;">
                    <p>Hover over chart points to see details</p>
                    <p>Click legend items to toggle data series</p>
                </div>
                <div class="live-example-controls">
                    <button onclick="filterData('q1')" class="control-btn">Q1 Only</button>
                    <button onclick="filterData('q2')" class="control-btn">Q2 Only</button>
                    <button onclick="filterData('all')" class="control-btn">All Data</button>
                </div>
            </div>
        `
    },
    {
        id: 51,
        term: "Joining Optimization",
        definition: "A technique wherein AI identifies the optimal join order for complex queries with multiple tables.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔗 Join Optimization</div>
                <p>Optimize multi-table joins:</p>
                <div style="margin: 10px 0; padding: 12px; background: #f8f9fa; border-radius: 8px; font-family: monospace;">
                    SELECT * FROM A<br>
                    JOIN B ON A.id = B.a_id<br>
                    JOIN C ON B.id = C.b_id<br>
                    JOIN D ON C.id = D.c_id
                </div>
                <button onclick="optimizeJoins()" class="control-btn">Optimize Joins</button>
                <div id="joinResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Join Order Optimized!</strong>
                    <p>Optimal order: B → A → C → D</p>
                    <p>Performance improvement: 65% faster</p>
                </div>
            </div>
        `
    },
    {
        id: 52,
        term: "Large Language Models (LLMs)",
        definition: "A type of deep learning model trained on massive amounts of text data to learn the patterns and structures of language.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">📚 LLM Capabilities</div>
                <div class="chat-interface">
                    <div class="chat-messages" id="llmMessages">
                        <div class="message ai-message">
                            <strong>LLM:</strong> I'm a large language model trained on vast text data.
                        </div>
                        <div class="message user-message">
                            <strong>You:</strong> Summarize this text
                        </div>
                        <div class="message ai-message">
                            <strong>LLM:</strong> I can summarize, translate, analyze sentiment, and generate text.
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <select id="llmTask" style="padding: 6px; border-radius: 4px; width: 100%; margin-bottom: 8px;">
                            <option value="summarize">Summarize</option>
                            <option value="translate">Translate</option>
                            <option value="sentiment">Sentiment Analysis</option>
                        </select>
                        <input type="text" class="chat-input" id="llmInput" placeholder="Enter text...">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 53,
        term: "Machine Learning",
        definition: "Type of artificial intelligence that focuses on creating algorithms and models that enable computers to learn and make predictions or decisions.",
        category: "ml",
        example: `
            <div class="example-demo">
                <div class="demo-title">🤖 Machine Learning Types</div>
                <p>Explore different ML approaches:</p>
                <select id="mlType" onchange="showMLExample()" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                    <option value="">Select ML type...</option>
                    <option value="supervised">Supervised Learning</option>
                    <option value="unsupervised">Unsupervised Learning</option>
                    <option value="reinforcement">Reinforcement Learning</option>
                </select>
                <div id="mlExample" style="display:none; padding: 12px; background: #f8f9fa; border-radius: 8px; margin-top: 10px;">
                    <strong>Example:</strong> <span id="mlDesc"></span>
                </div>
            </div>
        `
    },
    {
        id: 54,
        term: "Measurement Bias",
        definition: "Bias arising from inaccuracies in data collection, such as flawed survey designs, incorrect data entries, or biased questions.",
        category: "bias",
        example: `
            <div class="example-demo">
                <div class="demo-title">📏 Measurement Bias</div>
                <p>Identify measurement issues in survey:</p>
                <div style="margin: 10px 0; padding: 12px; background: #f8f9fa; border-radius: 8px;">
                    <p><strong>Survey Question:</strong></p>
                    <p>"How satisfied are you with our EXCELLENT service?"</p>
                    <p style="color: #e74c3c; font-size: 0.9rem;">⚠️ Biased wording leads to inaccurate responses</p>
                </div>
                <button onclick="fixMeasurementBias()" class="control-btn">Fix Measurement Bias</button>
                <div id="measurementResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Bias Fixed:</strong>
                    <p>Revised question: "How satisfied are you with our service?"</p>
                    <p>Response accuracy improved by 42%</p>
                </div>
            </div>
        `
    },
    {
        id: 55,
        term: "Misrepresentation",
        definition: "False representation of data.",
        category: "bias",
        example: `
            <div class="example-demo">
                <div class="demo-title">🚫 Data Misrepresentation</div>
                <p>Identify misleading data presentation:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 12px; background: #f8d7da; border-radius: 8px;">
                        <strong>Misleading Chart:</strong>
                        <p>Y-axis doesn't start at zero, exaggerating differences</p>
                    </div>
                </div>
                <button onclick="fixMisrepresentation()" class="control-btn">Fix Representation</button>
                <div id="representationResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Representation Fixed:</strong>
                    <p>Chart now shows accurate proportional differences</p>
                    <p>Y-axis starts at 0 as recommended</p>
                </div>
            </div>
        `
    },
    {
        id: 56,
        term: "Missing at Random (MAR)",
        definition: "Refers to missing values that are not random but dependent on certain factors.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎲 Missing at Random (MAR)</div>
                <p>Analyze missing data patterns:</p>
                <div style="margin: 10px 0;">
                    <table class="data-table">
                        <tr><th>Customer</th><th>Income</th><th>Survey Response</th></tr>
                        <tr><td>John</td><td>$85,000</td><td>✅ Complete</td></tr>
                        <tr><td>Sarah</td><td>$42,000</td><td>❌ Missing</td></tr>
                        <tr><td>Mike</td><td>$38,000</td><td>❌ Missing</td></tr>
                    </table>
                </div>
                <div style="padding: 12px; background: #fff3cd; border-radius: 8px; margin-top: 10px;">
                    <strong>Pattern Detected:</strong>
                    <p>Survey responses missing for lower-income customers</p>
                    <p>This is MAR - missing depends on income level</p>
                </div>
            </div>
        `
    },
    {
        id: 57,
        term: "Missing Completely at Random (MCAR)",
        definition: "Refers to missing values unrelated to other variables where the occurrence is entirely by chance.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎯 Missing Completely at Random (MCAR)</div>
                <p>Random missing data pattern:</p>
                <div style="margin: 10px 0;">
                    <table class="data-table">
                        <tr><th>Customer</th><th>Age</th><th>Income</th><th>Missing Data</th></tr>
                        <tr><td>John</td><td>35</td><td>$85K</td><td>❌ Random</td></tr>
                        <tr><td>Sarah</td><td>42</td><td>$92K</td><td>✅ Complete</td></tr>
                        <tr><td>Mike</td><td>28</td><td>$78K</td><td>✅ Complete</td></tr>
                        <tr><td>Lisa</td><td>51</td><td>$105K</td><td>❌ Random</td></tr>
                    </table>
                </div>
                <div style="padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>MCAR Pattern:</strong>
                    <p>Missing values show no relationship with other variables</p>
                    <p>Missing completely at random</p>
                </div>
            </div>
        `
    },
    {
        id: 58,
        term: "Missing Not at Random (MNAR)",
        definition: "Refers to missing values related to the value itself.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">📉 Missing Not at Random (MNAR)</div>
                <p>Systematic missing data pattern:</p>
                <div style="margin: 10px 0;">
                    <table class="data-table">
                        <tr><th>Customer</th><th>Credit Score</th><th>Reported?</th></tr>
                        <tr><td>John</td><td>780</td><td>✅ Reported</td></tr>
                        <tr><td>Sarah</td><td>620</td><td>❌ Not Reported</td></tr>
                        <tr><td>Mike</td><td>580</td><td>❌ Not Reported</td></tr>
                    </table>
                </div>
                <div style="padding: 12px; background: #f8d7da; border-radius: 8px; margin-top: 10px;">
                    <strong>MNAR Pattern:</strong>
                    <p>Low credit scores not reported by customers</p>
                    <p>Missingness depends on the value itself</p>
                </div>
            </div>
        `
    },
    {
        id: 59,
        term: "Mostly AI",
        definition: "Generative AI-based tool that can generate synthetic data.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🌀 Mostly AI Synthetic Data</div>
                <p>Generate synthetic datasets:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Dataset Size:</strong> 10,000 records
                    </div>
                    <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <strong>Privacy Level:</strong> Differential Privacy (ε=1.0)
                    </div>
                </div>
                <button onclick="generateMostlyAIData()" class="control-btn">Generate Synthetic Data</button>
                <div id="mostlyAIResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Synthetic Data Generated!</strong>
                    <p>Statistical properties preserved | Privacy guaranteed</p>
                </div>
            </div>
        `
    },
    {
        id: 60,
        term: "Multidimensional Baselining",
        definition: "The process of establishing normal behavior patterns across multiple data points or variables.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">📊 Multidimensional Baselining</div>
                <p>Establish normal behavior patterns:</p>
                <div style="margin: 10px 0;">
                    <table class="data-table">
                        <tr><th>Metric</th><th>Normal Range</th><th>Current</th></tr>
                        <tr><td>Website Visits</td><td>1,000-1,500/day</td><td>1,250 ✅</td></tr>
                        <tr><td>Conversion Rate</td><td>3-5%</td><td>4.2% ✅</td></tr>
                        <tr><td>Avg. Order Value</td><td>$80-$120</td><td>$145 ⚠️</td></tr>
                    </table>
                </div>
                <button onclick="updateBaseline()" class="control-btn">Update Baseline</button>
                <div id="baselineResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Baseline Updated!</strong>
                    <p>New normal range for AOV: $80-$150</p>
                </div>
            </div>
        `
    },
    {
        id: 61,
        term: "Narrative Science",
        definition: "A company that uses automated narrative generation for storytelling from data.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">📖 Narrative Science</div>
                <p>Generate data-driven stories:</p>
                <div style="margin: 10px 0;">
                    <textarea id="narrativeData" placeholder="Enter data points..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 60px;">Sales increased 15% in Q3, customer satisfaction 4.5/5</textarea>
                </div>
                <button onclick="generateNarrative()" class="control-btn">Generate Story</button>
                <div id="narrativeResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>📖 Data Story:</strong>
                    <p>"Our business showed strong growth in Q3 with sales increasing by 15%. Customer satisfaction remained high at 4.5 out of 5, indicating positive reception of our products and services."</p>
                </div>
            </div>
        `
    },
    {
        id: 62,
        term: "Natural Language Generation",
        definition: "The use of artificial intelligence to produce spoken or written human-like text.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">💬 Natural Language Generation</div>
                <p>Generate text from data:</p>
                <div style="margin: 10px 0;">
                    <textarea id="nlgInput" placeholder="Enter data or bullet points..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 60px;">Q3 sales: $245K, growth: 15%, top product: Laptop Pro</textarea>
                </div>
                <button onclick="generateNLG()" class="control-btn">Generate Text</button>
                <div id="nlgResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Generated Text:</strong>
                    <p>"In the third quarter, we achieved sales of $245,000, representing a 15% growth compared to the previous quarter. The Laptop Pro emerged as our top-performing product during this period."</p>
                </div>
            </div>
        `
    },
    {
        id: 63,
        term: "Natural Language Processing (NLP)",
        definition: "Branch of artificial intelligence that enables computers to understand, manipulate, and generate human language.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🗣️ Natural Language Processing</div>
                <p>Try NLP tasks:</p>
                <select id="nlpTask" onchange="showNLPExample()" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                    <option value="">Select NLP task...</option>
                    <option value="sentiment">Sentiment Analysis</option>
                    <option value="entities">Entity Recognition</option>
                    <option value="summarization">Text Summarization</option>
                </select>
                <div id="nlpExample" style="display:none; margin: 10px 0;">
                    <textarea id="nlpInput" placeholder="Enter text..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 60px;"></textarea>
                </div>
                <button onclick="runNLP()" class="control-btn" id="nlpButton" style="display:none;">Run NLP</button>
                <div id="nlpResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>NLP Results:</strong>
                    <p id="nlpOutput"></p>
                </div>
            </div>
        `
    },
    {
        id: 64,
        term: "Natural Language Querying",
        definition: "A capability in BI software that enables users to ask questions of data in natural language.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🗣️ Natural Language Query</div>
                <div class="chat-interface">
                    <div class="chat-messages" id="nlqMessages">
                        <div class="message ai-message">
                            <strong>NLQ Assistant:</strong> Ask questions about your data in plain English.
                        </div>
                        <div class="message user-message">
                            <strong>You:</strong> What were sales last month?
                        </div>
                        <div class="message ai-message">
                            <strong>NLQ Assistant:</strong> Last month sales: $85,420
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <input type="text" class="chat-input" id="nlqInput" placeholder="Ask a question about your data...">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 65,
        term: "NLP Engine",
        definition: "Technology that is used by machines to understand, process, and generate human language.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">⚙️ NLP Engine</div>
                <p>Process text with NLP engine:</p>
                <div style="margin: 10px 0;">
                    <textarea id="engineInput" placeholder="Enter text to process..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 80px;">The customer satisfaction survey showed positive results with 85% approval rating.</textarea>
                </div>
                <button onclick="processWithNLPEngine()" class="control-btn">Process with NLP Engine</button>
                <div id="engineResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ NLP Processing Complete:</strong>
                    <p>• Sentiment: Positive</p>
                    <p>• Key Entities: customer satisfaction survey, approval rating</p>
                    <p>• Key Phrase: 85% approval rating</p>
                </div>
            </div>
        `
    },
    {
        id: 66,
        term: "NoSQL",
        definition: "Refers to nonrelational databases that use a nontabular format to store data.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🗄️ NoSQL Database</div>
                <p>NoSQL document structure:</p>
                <div style="margin: 10px 0; padding: 12px; background: #f8f9fa; border-radius: 8px; font-family: monospace;">
                    {<br>
                    &nbsp;&nbsp;"customer_id": "C1001",<br>
                    &nbsp;&nbsp;"name": "John Smith",<br>
                    &nbsp;&nbsp;"orders": [<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;{"order_id": "O2001", "amount": 125.50},<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;{"order_id": "O2002", "amount": 89.99}<br>
                    &nbsp;&nbsp;]<br>
                    }
                </div>
                <div style="padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>NoSQL Features:</strong>
                    <p>• Flexible schema</p>
                    <p>• Document-oriented storage</p>
                    <p>• Scales horizontally</p>
                </div>
            </div>
        `
    },
    {
        id: 67,
        term: "Otter.ai",
        definition: "Web-based transcription service that uses AI to transcribe conversations, take notes during meetings.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎤 Otter.ai Transcription</div>
                <p>Transcribe audio to text:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; text-align: center;">
                        <div style="font-size: 2rem;">🎤</div>
                        <p>Sample audio: "Our Q3 sales increased by 15 percent"</p>
                    </div>
                </div>
                <button onclick="transcribeAudio()" class="control-btn">Transcribe Audio</button>
                <div id="transcriptionResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Transcription Complete:</strong>
                    <p>"Our Q3 sales increased by 15 percent."</p>
                    <p>• Speaker identification: Sales Manager</p>
                    <p>• Keywords: Q3, sales, increased, 15 percent</p>
                </div>
            </div>
        `
    },
    {
        id: 68,
        term: "Outerbase",
        definition: "A freely available AI-powered interface that can be used to manage your database.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">💾 Outerbase Database Interface</div>
                <p>AI-powered database management:</p>
                <div style="margin: 10px 0;">
                    <select id="dbAction" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                        <option value="query">Run Query</option>
                        <option value="schema">View Schema</option>
                        <option value="optimize">Optimize Database</option>
                    </select>
                    <button onclick="runDBAction()" class="control-btn">Execute</button>
                </div>
                <div id="dbResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Database Action Complete:</strong>
                    <p>Query executed successfully</p>
                    <p>245 rows returned in 0.4 seconds</p>
                </div>
            </div>
        `
    },
    {
        id: 69,
        term: "Overfitting in Machine Learning",
        definition: "When a model gives accurate predictions for training data but not for new data.",
        category: "ml",
        example: `
            <div class="example-demo">
                <div class="demo-title">📈 Overfitting Demonstration</div>
                <p>Compare model performance:</p>
                <div class="visualization-container">
                    <canvas id="overfittingChart"></canvas>
                </div>
                <div style="margin: 10px 0;">
                    <table class="data-table">
                        <tr><th>Model</th><th>Training Accuracy</th><th>Test Accuracy</th></tr>
                        <tr><td>Simple Model</td><td>85%</td><td>83% ✅</td></tr>
                        <tr><td>Complex Model</td><td>98%</td><td>72% ⚠️</td></tr>
                    </table>
                </div>
                <div style="padding: 12px; background: #fff3cd; border-radius: 8px; margin-top: 10px;">
                    <strong>Overfitting Detected:</strong>
                    <p>Complex model performs well on training data but poorly on new data</p>
                </div>
            </div>
        `
    },
    {
        id: 70,
        term: "Picture Classification",
        definition: "Assigning a label or tag to an entire image based on already labeled images of training data.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🖼️ Picture Classification</div>
                <p>Classify images into categories:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; text-align: center;">
                        <div style="font-size: 3rem;">📱</div>
                        <p>Sample image: Smartphone</p>
                    </div>
                </div>
                <button onclick="classifyImage()" class="control-btn">Classify Image</button>
                <div id="classificationResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Classification Result:</strong>
                    <p>Category: Electronics</p>
                    <p>Confidence: 94%</p>
                    <p>Labels: smartphone, mobile device, technology</p>
                </div>
            </div>
        `
    },
    {
        id: 71,
        term: "Power BI",
        definition: "BI tool developed by Microsoft that helps transform raw data into meaningful insights through interactive visualizations and reports.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">💼 Power BI Dashboard</div>
                <p>Interactive Power BI simulation:</p>
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px; margin: 10px 0;">
                    <div style="padding: 12px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.85rem; color: #666;">Sales Trend</div>
                        <div class="visualization-container">
                            <canvas id="powerBIChart"></canvas>
                        </div>
                    </div>
                    <div style="padding: 12px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.85rem; color: #666;">Top Regions</div>
                        <div style="margin-top: 10px;">
                            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                                <span>West</span>
                                <span>$124K</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                                <span>East</span>
                                <span>$98K</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button onclick="refreshPowerBI()" class="control-btn">Refresh Dashboard</button>
            </div>
        `
    },
    {
        id: 72,
        term: "Predictive Analytics",
        definition: "Statistical techniques used to predict future behavior and events by uncovering relationships and patterns within large volumes of data.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔮 Predictive Analytics</div>
                <p>Predict future sales:</p>
                <div class="visualization-container">
                    <canvas id="predictiveChart"></canvas>
                </div>
                <div style="margin: 10px 0;">
                    <div style="padding: 12px; background: #e8f4f8; border-radius: 8px;">
                        <strong>Prediction:</strong> Next quarter sales: $155,000 ± $8,000
                    </div>
                </div>
                <div class="live-example-controls">
                    <button onclick="updatePrediction('optimistic')" class="control-btn">Optimistic</button>
                    <button onclick="updatePrediction('pessimistic')" class="control-btn">Pessimistic</button>
                    <button onclick="updatePrediction('neutral')" class="control-btn">Neutral</button>
                </div>
            </div>
        `
    },
    {
        id: 73,
        term: "Qlik Sense",
        definition: "BI tool that integrates advanced analytics, enabling users to perform sentiment analysis and predictive modeling within their dashboards.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔍 Qlik Sense Analytics</div>
                <p>Advanced analytics dashboard:</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin: 10px 0;">
                    <div style="padding: 12px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.85rem; color: #666;">Sentiment Analysis</div>
                        <div style="font-size: 1.3rem; font-weight: bold; color: #27ae60;">Positive</div>
                        <div style="font-size: 0.85rem;">85% positive reviews</div>
                    </div>
                    <div style="padding: 12px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.85rem; color: #666;">Churn Risk</div>
                        <div style="font-size: 1.3rem; font-weight: bold; color: #e74c3c;">12%</div>
                        <div style="font-size: 0.85rem;">High-risk customers</div>
                    </div>
                </div>
                <button onclick="associateData()" class="control-btn">Associate Data</button>
                <div id="qlikResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Data Associated!</strong>
                    <p>Found 3 associations between sentiment and churn risk</p>
                </div>
            </div>
        `
    },
    {
        id: 74,
        term: "Scenario Modeling",
        definition: "Refers to when generative AI helps formulate SQL queries to explore hypothetical scenarios on different parameters.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎯 Scenario Modeling</div>
                <p>Explore business scenarios:</p>
                <div style="margin: 10px 0;">
                    <select id="scenarioType" style="padding: 6px; border-radius: 4px; width: 100%; margin: 10px 0;">
                        <option value="price">Price Increase Scenario</option>
                        <option value="demand">Demand Change Scenario</option>
                        <option value="cost">Cost Reduction Scenario</option>
                    </select>
                    <div class="slider-container">
                        <label>Scenario Parameter: <span id="scenarioValue">10</span>%</label>
                        <input type="range" min="5" max="30" value="10" oninput="updateScenario()" id="scenarioSlider">
                    </div>
                </div>
                <button onclick="runScenario()" class="control-btn">Run Scenario</button>
                <div id="scenarioResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>Scenario Results:</strong>
                    <p>Revenue impact: +<span id="revenueImpact">15</span>%</p>
                    <p>Profit impact: +<span id="profitImpact">12</span>%</p>
                </div>
            </div>
        `
    },
    {
        id: 75,
        term: "Segmentation",
        definition: "The breaking down of large data sets into smaller, more manageable parts.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔪 Data Segmentation</div>
                <p>Segment customer data:</p>
                <div style="margin: 10px 0;">
                    <select id="segmentationField" style="padding: 6px; border-radius: 4px; width: 100%; margin-bottom: 10px;">
                        <option value="region">By Region</option>
                        <option value="age">By Age Group</option>
                        <option value="value">By Customer Value</option>
                    </select>
                    <button onclick="segmentData()" class="control-btn">Segment Data</button>
                </div>
                <div id="segmentationResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Data Segmented!</strong>
                    <p>45,238 records divided into 5 segments</p>
                    <p>Segment sizes: 8,542 | 12,458 | 9,874 | 7,652 | 6,712</p>
                </div>
            </div>
        `
    },
    {
        id: 76,
        term: "Selection Bias",
        definition: "Bias occurring when the data sample is not representative of the intended population.",
        category: "bias",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎯 Selection Bias</div>
                <p>Identify sample representation issues:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 12px; background: #f8f9fa; border-radius: 8px;">
                        <p><strong>Survey Sample:</strong> 1000 online respondents</p>
                        <p><strong>Population:</strong> All customers (45,238 total)</p>
                    </div>
                </div>
                <div style="padding: 12px; background: #fff3cd; border-radius: 8px; margin-top: 10px;">
                    <strong>⚠️ Selection Bias Detected:</strong>
                    <p>• Only online customers surveyed</p>
                    <p>• Younger demographics overrepresented</p>
                    <p>• Urban customers overrepresented</p>
                </div>
            </div>
        `
    },
    {
        id: 77,
        term: "Semi-supervised Learning",
        definition: "A process where AI tools combine labeled and unlabeled data to identify patterns in the labeled data that serve as a guide to assign labels to the unlabeled data.",
        category: "ml",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎓 Semi-supervised Learning</div>
                <p>Combine labeled and unlabeled data:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0;">
                        <strong>Labeled Data:</strong> 1,000 records
                    </div>
                    <div style="padding: 8px; background: #fff3cd; border-radius: 8px; margin: 5px 0;">
                        <strong>Unlabeled Data:</strong> 10,000 records
                    </div>
                </div>
                <button onclick="runSemiSupervised()" class="control-btn">Run Semi-supervised Learning</button>
                <div id="semiResult" style="display:none; padding: 12px; background: #d1ecf1; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Learning Complete!</strong>
                    <p>9,542 unlabeled records now classified</p>
                    <p>Model accuracy: 88%</p>
                </div>
            </div>
        `
    },
    {
        id: 78,
        term: "Sentiment Analysis",
        definition: "The process of analyzing large volumes of text to determine whether it expresses a positive, negative, or neutral sentiment.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">😊 Sentiment Analysis</div>
                <p>Analyze text sentiment:</p>
                <div style="margin: 10px 0;">
                    <textarea id="sentimentInput" placeholder="Enter text to analyze..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 80px;">The product is amazing! It exceeded all my expectations and the delivery was super fast.</textarea>
                </div>
                <button onclick="analyzeSentiment()" class="control-btn">Analyze Sentiment</button>
                <div id="sentimentResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>Sentiment Analysis:</strong>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem;" id="sentimentEmoji">😊</div>
                        <div style="font-size: 1.2rem; font-weight: bold;" id="sentimentText">Positive</div>
                        <div>Confidence: <span id="sentimentConfidence">92%</span></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 79,
        term: "Shapley Additive exPlanations (SHAP)",
        definition: "Game-theoretic approach used to explain the output of any machine learning model.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎯 SHAP Values</div>
                <p>Explain model predictions:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 12px; background: #f8f9fa; border-radius: 8px;">
                        <p><strong>Model Prediction:</strong> Customer will churn (85% probability)</p>
                    </div>
                </div>
                <button onclick="calculateSHAP()" class="control-btn">Calculate SHAP Values</button>
                <div id="shapResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>SHAP Explanation:</strong>
                    <p>• Last login >30 days ago: +0.35</p>
                    <p>• Support tickets >5: +0.28</p>
                    <p>• Monthly usage <10 hours: +0.22</p>
                    <p>• Customer tenure <6 months: +0.15</p>
                </div>
            </div>
        `
    },
    {
        id: 80,
        term: "Speech Synthesis",
        definition: "Computer-based generation of artificial speech from normal language text.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🗣️ Speech Synthesis</div>
                <p>Convert text to speech:</p>
                <div style="margin: 10px 0;">
                    <textarea id="speechInput" placeholder="Enter text to convert to speech..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 60px;">Sales increased by 15 percent in the third quarter.</textarea>
                </div>
                <button onclick="synthesizeSpeech()" class="control-btn">Synthesize Speech</button>
                <div id="speechResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px; text-align: center;">
                    <div style="font-size: 2rem;">🔊</div>
                    <strong>✅ Speech Synthesized!</strong>
                    <p>Audio file generated: sales_report.mp3</p>
                    <p>Voice: Natural-sounding female voice</p>
                </div>
            </div>
        `
    },
    {
        id: 81,
        term: "SQL Generation",
        definition: "Refers to the process of creating SQL (structured query language) queries automatically, without manually writing the code.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">💡 SQL Generation</div>
                <p>Generate SQL from natural language:</p>
                <div style="margin: 10px 0;">
                    <textarea id="sqlPrompt" placeholder="Describe what data you want..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 60px;">Show me all customers from California who spent more than $1000 last month</textarea>
                </div>
                <button onclick="generateSQL()" class="control-btn">Generate SQL</button>
                <div id="sqlResult" style="display:none; padding: 12px; background: #2c3e50; color: white; border-radius: 8px; margin-top: 10px; font-family: monospace;">
                    <strong>Generated SQL:</strong>
                    <pre id="sqlCode">SELECT customer_id, first_name, last_name, total_spent
FROM customers
WHERE state = 'CA'
AND last_purchase_date >= DATEADD(month, -1, GETDATE())
AND total_spent > 1000
ORDER BY total_spent DESC;</pre>
                </div>
            </div>
        `
    },
    {
        id: 82,
        term: "Structured Query Language (SQL)",
        definition: "Standardized programming language used to interact with relational database management systems.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🗃️ SQL Basics</div>
                <p>Learn SQL commands:</p>
                <div style="margin: 10px 0;">
                    <select id="sqlCommand" onchange="showSQLExample()" style="padding: 6px; border-radius: 4px; width: 100%;">
                        <option value="">Select SQL command...</option>
                        <option value="select">SELECT</option>
                        <option value="insert">INSERT</option>
                        <option value="update">UPDATE</option>
                        <option value="delete">DELETE</option>
                    </select>
                </div>
                <div id="sqlExample" style="display:none; padding: 12px; background: #2c3e50; color: white; border-radius: 8px; margin-top: 10px; font-family: monospace;">
                    <strong>SQL Example:</strong>
                    <pre id="sqlExampleCode"></pre>
                </div>
            </div>
        `
    },
    {
        id: 83,
        term: "Tableau",
        definition: "Visual analytics platform that transforms the way we use data to solve problems.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎨 Tableau Visualization</div>
                <p>Create Tableau-style visualizations:</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin: 10px 0;">
                    <div style="padding: 12px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                        <div style="font-size: 2rem;">📊</div>
                        <div>Sales Dashboard</div>
                    </div>
                    <div style="padding: 12px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                        <div style="font-size: 2rem;">📈</div>
                        <div>Trend Analysis</div>
                    </div>
                </div>
                <button onclick="createTableauViz()" class="control-btn">Create Visualization</button>
                <div id="tableauResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Tableau Workbook Created!</strong>
                    <p>Interactive dashboard with 5 visualizations</p>
                </div>
            </div>
        `
    },
    {
        id: 84,
        term: "text2sql.ai",
        definition: "An AI-powered tool that generates SQL queries from natural language instructions.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">💬 text2sql.ai</div>
                <p>Convert English to SQL:</p>
                <div style="margin: 10px 0;">
                    <textarea id="text2sqlInput" placeholder="Describe your query in English..." style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; height: 60px;">Find customers who made purchases in the last 7 days and spent more than $500</textarea>
                </div>
                <button onclick="convertTextToSQL()" class="control-btn">Convert to SQL</button>
                <div id="text2sqlResult" style="display:none; padding: 12px; background: #2c3e50; color: white; border-radius: 8px; margin-top: 10px; font-family: monospace;">
                    <strong>Generated SQL:</strong>
                    <pre>SELECT customer_id, first_name, last_name, SUM(amount) as total_spent
FROM customers
JOIN orders ON customers.id = orders.customer_id
WHERE order_date >= DATEADD(day, -7, GETDATE())
GROUP BY customer_id, first_name, last_name
HAVING SUM(amount) > 500
ORDER BY total_spent DESC;</pre>
                </div>
            </div>
        `
    },
    {
        id: 85,
        term: "Transformers",
        definition: "A deep learning architecture that uses an encoder-decoder mechanism.",
        category: "ml",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔄 Transformer Architecture</div>
                <p>Transformer model components:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0; text-align: center;">
                        <strong>Encoder</strong><br>
                        Input processing
                    </div>
                    <div style="padding: 8px; background: #d1ecf1; border-radius: 8px; margin: 5px 0; text-align: center;">
                        <strong>Attention Mechanism</strong><br>
                        Context understanding
                    </div>
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0; text-align: center;">
                        <strong>Decoder</strong><br>
                        Output generation
                    </div>
                </div>
                <button onclick="runTransformer()" class="control-btn">Run Transformer Model</button>
                <div id="transformerResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ Transformer Output:</strong>
                    <p>Input: "The cat sat on the"</p>
                    <p>Output: "The cat sat on the mat."</p>
                </div>
            </div>
        `
    },
    {
        id: 86,
        term: "Variational Autoencoder (VAE)",
        definition: "A type of generative model that is basically a neural network model designed to learn the efficient representation of input data.",
        category: "ml",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎨 Variational Autoencoder</div>
                <p>VAE encodes and decodes data:</p>
                <div style="margin: 10px 0;">
                    <div style="padding: 8px; background: #e3f2fd; border-radius: 8px; margin: 5px 0; text-align: center;">
                        <strong>Encoder</strong><br>
                        Compresses input to latent space
                    </div>
                    <div style="padding: 8px; background: #fff3cd; border-radius: 8px; margin: 5px 0; text-align: center;">
                        <strong>Latent Space</strong><br>
                        Learned representation
                    </div>
                    <div style="padding: 8px; background: #d1ecf1; border-radius: 8px; margin: 5px 0; text-align: center;">
                        <strong>Decoder</strong><br>
                        Reconstructs from latent space
                    </div>
                </div>
                <button onclick="runVAE()" class="control-btn">Run VAE</button>
                <div id="vaeResult" style="display:none; padding: 12px; background: #e8f4f8; border-radius: 8px; margin-top: 10px;">
                    <strong>✅ VAE Completed!</strong>
                    <p>Input dimension: 784 → Latent dimension: 32 → Output dimension: 784</p>
                    <p>Reconstruction loss: 0.023</p>
                </div>
            </div>
        `
    }
];

// Global variables
let currentCharts = {};
let kafkaInterval;
let activeExampleId = null;

// Initialize the glossary
document.addEventListener('DOMContentLoaded', function() {
    renderGlossary();
    setupEventListeners();
    
    // Update total terms count
    document.getElementById('totalTerms').textContent = glossaryData.length;
    document.getElementById('visibleTerms').textContent = glossaryData.length;
    document.getElementById('withExamples').textContent = glossaryData.filter(t => t.example).length;
});

// Render all glossary terms
function renderGlossary() {
    const container = document.getElementById('glossaryContainer');
    const filteredTerms = filterGlossary();
    
    document.getElementById('visibleTerms').textContent = filteredTerms.length;
    
    if (filteredTerms.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No matching terms found</h3>
                <p>Try a different search term or filter</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredTerms.map(term => `
        <div class="term-card" onclick="openModal(${term.id})">
            <div class="term-header">
                <h3 class="term-title">${highlightText(term.term)}</h3>
                <span class="term-category">${getCategoryName(term.category)}</span>
            </div>
            <p class="term-definition">${highlightText(term.definition.substring(0, 150))}${term.definition.length > 150 ? '...' : ''}</p>
            ${term.example ? `
            <div class="example-container">
                <div class="example-title">
                    <i class="fas fa-play-circle"></i>
                    Live Example Available
                </div>
                <p>Click to try interactive demo</p>
            </div>
            ` : '<div style="height: 20px;"></div>'}
            <div class="term-actions">
                <button class="action-btn view-example" onclick="event.stopPropagation(); openModal(${term.id})">
                    ${term.example ? 'Try Live Example' : 'View Details'}
                </button>
            </div>
        </div>
    `).join('');
}

// Filter glossary based on search and category
function filterGlossary() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    
    return glossaryData.filter(term => {
        const matchesSearch = term.term.toLowerCase().includes(searchTerm) ||
                             term.definition.toLowerCase().includes(searchTerm);
        const matchesFilter = activeFilter === 'all' || term.category === activeFilter;
        return matchesSearch && matchesFilter;
    });
}

// Highlight search terms in text
function highlightText(text) {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm || !text) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.toString().replace(regex, '<span class="highlight">$1</span>');
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'ai': 'AI Concepts',
        'tools': 'AI Tools',
        'bias': 'Bias & Ethics',
        'data': 'Data Management',
        'viz': 'Visualization',
        'ml': 'Machine Learning'
    };
    return categories[category] || category;
}

// Setup event listeners
function setupEventListeners() {
    // Search
    document.getElementById('searchInput').addEventListener('input', renderGlossary);
    
    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderGlossary();
        });
    });
    
    // Modal close
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // Close modal on outside click
    document.getElementById('termModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
}

// Open modal with term details
function openModal(termId) {
    const term = glossaryData.find(t => t.id === termId);
    if (!term) return;
    
    activeExampleId = termId;
    
    document.getElementById('modalContent').innerHTML = `
        <h2 class="modal-term-title">${term.term}</h2>
        <span class="modal-term-category">${getCategoryName(term.category)}</span>
        
        <div class="modal-section">
            <h3>Definition</h3>
            <p>${term.definition}</p>
        </div>
        
        ${term.example ? `
        <div class="modal-section">
            <h3>Live Example</h3>
            ${term.example}
        </div>
        ` : ''}
        
        <div class="modal-section">
            <h3>Related Terms</h3>
            <div id="relatedTerms">
                ${getRelatedTerms(term).map(t => 
                    `<button class="action-btn view-example" onclick="openModal(${t.id})" style="margin: 5px;">${t.term}</button>`
                ).join(' ')}
            </div>
        </div>
    `;
    
    document.getElementById('termModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Initialize example-specific functionality
    setTimeout(() => initializeExample(term), 100);
}

// Get related terms (same category)
function getRelatedTerms(term) {
    return glossaryData
        .filter(t => t.category === term.category && t.id !== term.id)
        .slice(0, 3);
}

// Close modal
function closeModal() {
    document.getElementById('termModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    activeExampleId = null;
    
    // Clean up intervals
    if (kafkaInterval) {
        clearInterval(kafkaInterval);
        kafkaInterval = null;
    }
    
    // Destroy charts
    Object.values(currentCharts).forEach(chart => {
        if (chart && typeof chart.destroy === 'function') {
            chart.destroy();
        }
    });
    currentCharts = {};
}

// Initialize example functionality
function initializeExample(term) {
    // Initialize charts if needed
    const chartTermIds = [4, 8, 20, 30, 50, 69, 71, 72];
    if (chartTermIds.includes(term.id)) {
        initializeChart(term.id);
    }
    
    // Initialize chat interfaces
    const chatTermIds = [6, 14, 19, 37, 43, 52, 64];
    if (chatTermIds.includes(term.id)) {
        initializeChat(term.id);
    }
    
    // Initialize other interactive elements
    setupInteractiveElements(term.id);
}

// Initialize charts
function initializeChart(termId) {
    switch(termId) {
        case 4: createAnomalyChart(); break;
        case 8: createFeatureChart(); break;
        case 20: createCorrelationChart(); break;
        case 30: createVizChart(); break;
        case 50: createInteractiveChart(); break;
        case 69: createOverfittingChart(); break;
        case 71: createPowerBIChart(); break;
        case 72: createPredictiveChart(); break;
    }
}

// Setup interactive elements
function setupInteractiveElements(termId) {
    // Setup sliders, buttons, and other interactive elements
    if (termId === 15) setupClusteringSliders();
    if (termId === 74) setupScenarioSlider();
    if (termId === 39) setupGenAISelect();
    if (termId === 45) setupImageRecognition();
    if (termId === 53) setupMLTypeSelect();
    if (termId === 63) setupNLPSelect();
    if (termId === 82) setupSQLExamples();
}

// ========== EXAMPLE FUNCTIONS ==========

// Basic demo functions
function runAkkioDemo() {
    document.getElementById('akkioResult').style.display = 'block';
}

function detectBias() {
    document.getElementById('biasResult').style.display = 'block';
}

function runAlteryxWorkflow() {
    document.getElementById('alteryxResult').style.display = 'block';
}

// Anomaly Detection Chart
function createAnomalyChart() {
    const ctx = document.getElementById('anomalyChart');
    if (!ctx) return;
    
    currentCharts.anomaly = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'],
            datasets: [{
                label: 'Transactions',
                data: [120, 135, 118, 125, 130, 5420, 131],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Transaction Count'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                }
            }
        }
    });
}

function addAnomaly() {
    if (currentCharts.anomaly) {
        const labels = currentCharts.anomaly.data.labels;
        const data = currentCharts.anomaly.data.datasets[0].data;
        
        const times = ['4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
        labels.push(times[labels.length - 7] || 'New Time');
        data.push(Math.random() > 0.7 ? Math.random() * 5000 + 1000 : Math.random() * 200 + 100);
        
        currentCharts.anomaly.update();
    }
}

function resetAnomalyChart() {
    if (currentCharts.anomaly) {
        currentCharts.anomaly.data.labels = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'];
        currentCharts.anomaly.data.datasets[0].data = [120, 135, 118, 125, 130, 5420, 131];
        currentCharts.anomaly.update();
    }
}

// Kafka Streaming
function startKafkaStream() {
    let clickCount = 0;
    let sensorCount = 0;
    
    if (kafkaInterval) clearInterval(kafkaInterval);
    
    kafkaInterval = setInterval(() => {
        clickCount += Math.floor(Math.random() * 5) + 1;
        sensorCount += Math.floor(Math.random() * 3) + 1;
        
        document.getElementById('clickCount').textContent = clickCount;
        document.getElementById('sensorCount').textContent = sensorCount;
    }, 500);
}

function stopKafkaStream() {
    if (kafkaInterval) {
        clearInterval(kafkaInterval);
        kafkaInterval = null;
    }
}

// Chat interfaces
function initializeChat(termId) {
    const inputIds = {
        6: 'askDataInput',
        14: 'chatGPTInput',
        19: 'copilotInput',
        37: 'geminiInput',
        43: 'cognosInput',
        52: 'llmInput',
        64: 'nlqInput'
    };
    
    const messageIds = {
        6: 'askDataMessages',
        14: 'chatGPTMessages',
        19: 'copilotMessages',
        37: 'geminiMessages',
        43: 'cognosMessages',
        52: 'llmMessages',
        64: 'nlqMessages'
    };
    
    const inputId = inputIds[termId];
    const messagesId = messageIds[termId];
    
    if (!inputId || !messagesId) return;
    
    const input = document.getElementById(inputId);
    const messages = document.getElementById(messagesId);
    
    if (input && messages) {
        // Clear existing listeners
        const newInput = input.cloneNode(true);
        input.parentNode.replaceChild(newInput, input);
        
        newInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim()) {
                const question = this.value.trim();
                
                // Add user message
                const userMsg = document.createElement('div');
                userMsg.className = 'message user-message';
                userMsg.innerHTML = `<strong>You:</strong> ${question}`;
                messages.appendChild(userMsg);
                
                // Clear input
                this.value = '';
                
                // Generate AI response
                setTimeout(() => {
                    const aiMsg = document.createElement('div');
                    aiMsg.className = 'message ai-message';
                    
                    const responses = {
                        6: ["Sales increased 15% last quarter with strongest performance in Western regions.", 
                           "Customer retention rate is 85% for Q3.", 
                           "Top products by revenue: Laptop Pro ($45K), Headphones ($32K), Monitor ($28K)."],
                        14: ["The data shows significant growth in online sales channels.", 
                           "Customer satisfaction scores improved by 8% this quarter.", 
                           "Marketing campaign ROI calculated at 245%."],
                        19: ["I'll create a sales trend chart showing monthly performance.", 
                           "Here's the Excel formula for calculating growth: =((B2-A2)/A2)*100", 
                           "Power BI dashboard updated with latest metrics."],
                        37: ["Marketing campaign ideas: 1) Social media influencer partnerships 2) Customer referral program 3) Limited-time offers.", 
                           "Data storytelling approach: Focus on the customer journey from awareness to purchase.", 
                           "Brainstorming session: Consider seasonal trends and customer feedback."],
                        43: ["Business insights: Revenue trending upward with 12% monthly growth.", 
                           "Analysis complete: Customer acquisition cost decreased by 15%.", 
                           "Key finding: Product B shows highest customer satisfaction at 4.8/5."],
                        52: ["Text analysis complete. Key themes identified: growth, efficiency, innovation.", 
                           "Translation to French completed successfully.", 
                           "Sentiment analysis: Overall positive sentiment detected with 85% confidence."],
                        64: ["Query processed: Last month sales total $85,420.", 
                           "Answer: Top performing region is West with $245,000 revenue.", 
                           "Result: Average customer lifetime value is $1,245."]
                    };
                    
                    const termResponses = responses[termId] || ["I've processed your request and found relevant insights."];
                    const randomResponse = termResponses[Math.floor(Math.random() * termResponses.length)];
                    
                    aiMsg.innerHTML = `<strong>AI:</strong> ${randomResponse}`;
                    messages.appendChild(aiMsg);
                    
                    // Scroll to bottom
                    messages.scrollTop = messages.scrollHeight;
                }, 800);
            }
        });
    }
}

// Basic functions
function refreshDashboard() {
    const revenueElem = document.querySelector('#askDataMessages')?.parentElement?.querySelector('.demo-title');
    if (revenueElem) {
        const newRevenue = 245820 + Math.floor(Math.random() * 5000) - 2500;
        revenueElem.innerHTML = `📊 Auto-generated Dashboard - Updated: $${newRevenue.toLocaleString()}`;
    }
    alert('Dashboard refreshed with latest data!');
}

// Feature Chart
function createFeatureChart() {
    const ctx = document.getElementById('featureChart');
    if (!ctx) return;
    
    currentCharts.features = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Tenure', 'Monthly Charges', 'Contract', 'Support', 'Payment'],
            datasets: [{
                label: 'Feature Importance',
                data: [85, 78, 62, 45, 28],
                backgroundColor: ['#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f39c12'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Importance Score'
                    }
                }
            }
        }
    });
}

function analyzeFeatures() {
    if (currentCharts.features) {
        const newData = currentCharts.features.data.datasets[0].data.map(
            val => Math.min(100, val + Math.random() * 20 - 5)
        );
        currentCharts.features.data.datasets[0].data = newData;
        currentCharts.features.update();
        
        // Find max importance
        const maxIndex = newData.indexOf(Math.max(...newData));
        const features = ['Tenure', 'Monthly Charges', 'Contract', 'Support', 'Payment'];
        document.querySelector('#featureChart').parentElement.innerHTML += 
            `<div style="margin-top: 10px; padding: 8px; background: #e8f4f8; border-radius: 8px;">
                <strong>AI Discovered:</strong> ${features[maxIndex]} is the strongest predictor of churn.
            </div>`;
    }
}

// Chart Recommendations
function recommendChart() {
    const select = document.getElementById('dataTypeSelect');
    const recommendation = document.getElementById('chartRecommendation');
    const recommendedChart = document.getElementById('recommendedChart');
    
    if (!select.value) {
        recommendation.style.display = 'none';
        return;
    }
    
    const recommendations = {
        'timeseries': 'Line Chart - Best for showing trends and patterns over time',
        'categories': 'Bar Chart - Ideal for comparing values across different categories'
    };
    
    recommendedChart.textContent = recommendations[select.value] || 'Chart recommendation will appear here';
    recommendation.style.display = 'block';
}

// Schema Analysis
function analyzeSchema() {
    document.getElementById('schemaResult').style.display = 'block';
}

// Bias Examples
function showBiasExample() {
    const type = document.getElementById('biasType').value;
    const example = document.getElementById('biasExample');
    const desc = document.getElementById('biasDesc');
    
    if (!type) {
        example.style.display = 'none';
        return;
    }
    
    const examples = {
        'selection': 'Survey only includes online customers (75% of respondents), excluding offline users who may have different preferences.',
        'measurement': 'Survey question "How EXCELLENT is our service?" uses leading language that biases responses toward positive ratings.',
        'confirmation': 'Analyst only examines data from successful campaigns, ignoring failed campaigns that could provide valuable insights.'
    };
    
    desc.textContent = examples[type];
    example.style.display = 'block';
}

// BI Lifecycle
function showBIStage(stage) {
    const stages = {
        1: 'Collecting raw data from CRM, web analytics, and transaction systems. Data validation and integration.',
        2: 'Cleaning, transforming, and preparing data for analysis. Handling missing values and outliers.',
        3: 'Applying statistical methods and machine learning algorithms to extract insights and patterns.',
        4: 'Creating interactive dashboards, reports, and visualizations to communicate findings.'
    };
    
    const stageNames = ['Data Collection', 'Data Preparation', 'Data Analysis', 'Data Visualization'];
    
    document.getElementById('stageText').textContent = `${stageNames[stage-1]}: ${stages[stage]}`;
    document.getElementById('biStageDetail').style.display = 'block';
}

// Bias Analysis
function showBiasedView() {
    document.getElementById('analysisText').textContent = 'Feature successful with 60% adoption rate. Majority of users find it valuable.';
    document.getElementById('biasAnalysis').style.display = 'block';
}

function showCompleteView() {
    document.getElementById('analysisText').textContent = '40% abandonment rate indicates usability issues. Further investigation needed on user experience and onboarding.';
    document.getElementById('biasAnalysis').style.display = 'block';
}

// Ethical Assessment
function runEthicalAssessment() {
    const fairness = Math.floor(Math.random() * 30) + 70;
    const transparency = Math.floor(Math.random() * 35) + 60;
    const privacy = Math.floor(Math.random() * 20) + 80;
    
    document.getElementById('fairnessBar').style.width = `${fairness}%`;
    document.getElementById('transparencyBar').style.width = `${transparency}%`;
    document.getElementById('privacyBar').style.width = `${privacy}%`;
    
    // Update text
    const bars = document.querySelectorAll('.progress-bar + div');
    bars[0].textContent = `Fairness: ${fairness}%`;
    bars[1].textContent = `Transparency: ${transparency}%`;
    bars[2].textContent = `Privacy: ${privacy}%`;
}

// Correlation Chart
function createCorrelationChart() {
    const ctx = document.getElementById('correlationChart');
    if (!ctx) return;
    
    // Generate correlated data
    const strength = 0.8;
    const data = Array.from({length: 30}, () => {
        const x = Math.random() * 100;
        const y = x * strength + (Math.random() * 30 - 15);
        return { x, y };
    });
    
    currentCharts.correlation = new Chart(ctx.getContext('2d'), {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Data Points',
                data: data,
                backgroundColor: 'rgba(52, 152, 219, 0.6)',
                borderColor: '#2980b9',
                borderWidth: 1,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Variable X'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Variable Y'
                    }
                }
            }
        }
    });
    
    updateCorrelation(0.8);
}

function updateCorrelation(strength) {
    if (!currentCharts.correlation) return;
    
    const data = Array.from({length: 30}, () => {
        const x = Math.random() * 100;
        const y = x * strength + (Math.random() * 30 - 15);
        return { x, y };
    });
    
    currentCharts.correlation.data.datasets[0].data = data;
    currentCharts.correlation.update();
    
    document.getElementById('correlationValue').textContent = strength.toFixed(2);
    
    let strengthText = 'No relationship';
    if (Math.abs(strength) > 0.7) strengthText = 'Strong relationship';
    else if (Math.abs(strength) > 0.3) strengthText = 'Moderate relationship';
    else if (Math.abs(strength) > 0.1) strengthText = 'Weak relationship';
    
    document.getElementById('correlationStrength').textContent = strengthText;
}

// Clustering Sliders
function setupClusteringSliders() {
    updateCluster();
}

function updateCluster() {
    const freq = parseInt(document.getElementById('freqSlider').value);
    const value = parseInt(document.getElementById('valueSlider').value);
    
    document.getElementById('freqValue').textContent = freq;
    document.getElementById('valueValue').textContent = value;
    
    // Simple clustering logic
    let cluster = '';
    let color = '';
    
    if (freq > 20 && value > 300) {
        cluster = 'Premium Customers';
        color = '#27ae60';
    } else if (freq > 10 && value > 150) {
        cluster = 'Regular Customers';
        color = '#3498db';
    } else if (freq > 5 && value > 75) {
        cluster = 'Occasional Customers';
        color = '#f39c12';
    } else {
        cluster = 'New/Low-Value Customers';
        color = '#e74c3c';
    }
    
    const resultDiv = document.getElementById('clusterResult');
    resultDiv.textContent = `Cluster: ${cluster}`;
    resultDiv.style.background = color;
    resultDiv.style.color = 'white';
}

// Code Suggestions
function getCodeSuggestions() {
    const input = document.getElementById('sqlEditor').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    
    let suggestionText = '';
    
    if (input.includes('select')) {
        suggestionText = `
            <strong>AI Suggestions:</strong>
            <p>• SELECT customer_id, first_name, last_name</p>
            <p>• FROM customers</p>
            <p>• WHERE status = 'active'</p>
            <p>• ORDER BY last_purchase_date DESC</p>
        `;
    } else if (input.includes('from')) {
        suggestionText = `
            <strong>AI Suggestions:</strong>
            <p>• JOIN orders ON customers.id = orders.customer_id</p>
            <p>• WHERE order_date > '2023-01-01'</p>
            <p>• GROUP BY customer_id</p>
        `;
    } else {
        suggestionText = `
            <strong>AI Suggestions:</strong>
            <p>• Start typing SQL keywords (SELECT, FROM, WHERE)</p>
            <p>• Press Tab to auto-complete</p>
            <p>• Use Ctrl+Space for suggestions</p>
        `;
    }
    
    suggestions.innerHTML = suggestionText;
    suggestions.style.display = 'block';
}

// Azure Services
function runAzureService() {
    const service = document.getElementById('azureService').value;
    const input = document.getElementById('azureInput').value;
    const resultDiv = document.getElementById('azureResult');
    const output = document.getElementById('azureOutput');
    
    let result = '';
    
    if (service === 'vision') {
        result = 'Detected: Business presentation slide with charts and text. Confidence: 92%. Tags: presentation, chart, data, business.';
    } else if (service === 'language') {
        result = 'Sentiment: Positive (0.85). Key phrases: excellent performance, strong growth, market leadership. Entities: Company (Microsoft), Person (CEO), Location (Redmond).';
    } else if (service === 'speech') {
        result = 'Transcription: "The quarterly earnings call will begin at 2 PM Eastern Time. Please have your reports ready for discussion." Speaker: Female, Confidence: 96%.';
    }
    
    output.textContent = result;
    resultDiv.style.display = 'block';
}

// Data Management Functions
function optimizeQuery() {
    document.getElementById('optimizationResult').style.display = 'block';
}

function runAnalysis() {
    document.getElementById('analysisResult').style.display = 'block';
}

function cleanData() {
    document.getElementById('missingCount').textContent = '0';
    document.getElementById('missingCount').style.background = '#27ae60';
    document.getElementById('duplicateCount').textContent = '0';
    document.getElementById('duplicateCount').style.background = '#27ae60';
    document.getElementById('cleanResult').style.display = 'block';
}

function collectData() {
    document.getElementById('collectionResult').style.display = 'block';
}

function showLineage() {
    document.getElementById('lineageResult').style.display = 'block';
}

function mapData() {
    document.getElementById('mappingResult').style.display = 'block';
}

function profileData() {
    document.getElementById('profileResult').style.display = 'block';
}

function generateReport() {
    const type = document.getElementById('reportType').value;
    const types = {
        'sales': 'Q3_Sales_Report.pdf',
        'customer': 'Customer_Analysis_Report.pdf',
        'financial': 'Financial_Statement_Q3.pdf'
    };
    
    document.getElementById('reportResult').innerHTML = `
        <strong>✅ Report Generated!</strong>
        <p>Download: ${types[type]}</p>
        <p>Generated: ${new Date().toLocaleDateString()}</p>
    `;
    document.getElementById('reportResult').style.display = 'block';
}

function inferDataTypes() {
    document.getElementById('type1').textContent = 'Integer (Primary Key)';
    document.getElementById('type2').textContent = 'Date (YYYY-MM-DD)';
    document.getElementById('type3').textContent = 'Decimal (Currency)';
}

// Visualization Chart
function createVizChart() {
    showChart('bar');
}

function showChart(type) {
    const ctx = document.getElementById('vizChart');
    if (!ctx) return;
    
    if (currentCharts.viz) {
        currentCharts.viz.destroy();
    }
    
    const configs = {
        'bar': {
            type: 'bar',
            data: {
                labels: ['Product A', 'Product B', 'Product C', 'Product D'],
                datasets: [{
                    label: 'Sales ($)',
                    data: [65000, 59000, 80000, 81000],
                    backgroundColor: ['#3498db', '#2ecc71', '#9b59b6', '#e74c3c'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Sales ($)'
                        }
                    }
                }
            }
        },
        'line': {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue Trend',
                    data: [65000, 59000, 80000, 81000, 92000, 105000],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Revenue ($)'
                        }
                    }
                }
            }
        },
        'pie': {
            type: 'pie',
            data: {
                labels: ['Product A', 'Product B', 'Product C'],
                datasets: [{
                    data: [30, 40, 30],
                    backgroundColor: ['#3498db', '#2ecc71', '#9b59b6'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        }
    };
    
    currentCharts.viz = new Chart(ctx.getContext('2d'), configs[type]);
}

// DataRobot
function runDataRobot() {
    const task = document.getElementById('datarobotTask').value;
    const results = {
        'clustering': 'K-Means Clustering (Silhouette Score: 0.85)',
        'regression': 'Gradient Boosting (R²: 0.92)',
        'classification': 'Random Forest (Accuracy: 89%, AUC: 0.94)'
    };
    
    document.getElementById('datarobotResult').innerHTML = `
        <strong>✅ Model Selected!</strong>
        <p>Best model: ${results[task]}</p>
        <p>Training time: 2.4 minutes</p>
    `;
    document.getElementById('datarobotResult').style.display = 'block';
}

// Dummy Customer
function generateDummyCustomer() {
    const names = ['Alex Johnson', 'Maria Garcia', 'James Smith', 'Sarah Chen', 'Robert Kim'];
    const cities = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ'];
    const ages = [28, 35, 42, 31, 39];
    
    const randomIndex = Math.floor(Math.random() * names.length);
    
    document.querySelector('#dummyCustomer .demo-title').innerHTML = 
        `👤 Synthetic Customer Data - ${names[randomIndex]}`;
    
    const customerDiv = document.querySelector('#dummyCustomer').querySelectorAll('.f8f9fa')[0];
    customerDiv.innerHTML = `
        <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
            <strong>Customer:</strong> ${names[randomIndex]}
        </div>
        <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
            <strong>Age:</strong> ${ages[randomIndex]}
        </div>
        <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
            <strong>Location:</strong> ${cities[randomIndex]}
        </div>
        <div style="padding: 8px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
            <strong>Customer Since:</strong> ${2020 + Math.floor(Math.random() * 4)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}
        </div>
    `;
    
    document.getElementById('dummyResult').style.display = 'block';
}

// Explainable AI
function explainDecision() {
    document.getElementById('explanation').style.display = 'block';
}

// Federated Learning
function runFederatedLearning() {
    const progressBars = document.querySelectorAll('#federatedLearning .progress-fill');
    progressBars.forEach(bar => {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                document.getElementById('federatedResult').style.display = 'block';
            } else {
                width += 5;
                bar.style.width = width + '%';
            }
        }, 100);
    });
}

// Gamma.app
function generateGammaContent() {
    const type = document.getElementById('gammaContent').value;
    const input = document.getElementById('gammaInput').value || 'Business Analytics';
    
    const outputs = {
        'presentation': `10-slide presentation on "${input}" with data visualizations and executive summary`,
        'document': `Comprehensive 15-page document covering ${input} trends and analysis`,
        'website': `Interactive webpage showcasing ${input} insights with responsive design`
    };
    
    document.getElementById('gammaResult').innerHTML = `
        <strong>✅ Content Created!</strong>
        <p>${outputs[type]}</p>
        <p>Estimated creation time saved: 3.5 hours</p>
    `;
    document.getElementById('gammaResult').style.display = 'block';
}

// GAN Training
function trainGAN() {
    const generator = document.querySelector('#GAN .e3f2fd');
    const discriminator = document.querySelector('#GAN .fff3cd');
    
    let genAcc = 50;
    let discAcc = 50;
    
    const interval = setInterval(() => {
        genAcc += Math.random() * 5;
        discAcc += Math.random() * 3;
        
        if (genAcc > 100) genAcc = 100;
        if (discAcc > 100) discAcc = 100;
        
        generator.innerHTML = `<strong>Generator:</strong> Creating synthetic images (Accuracy: ${genAcc.toFixed(1)}%)`;
        discriminator.innerHTML = `<strong>Discriminator:</strong> Detecting real vs fake (Accuracy: ${discAcc.toFixed(1)}%)`;
        
        if (genAcc >= 85 && discAcc >= 78) {
            clearInterval(interval);
            document.getElementById('ganResult').style.display = 'block';
        }
    }, 500);
}

// Generative AI
function setupGenAISelect() {
    showGenAIOption();
}

function showGenAIOption() {
    const type = document.getElementById('genaiType').value;
    const inputArea = document.getElementById('genaiInputArea');
    const button = document.getElementById('genaiButton');
    
    if (!type) {
        inputArea.style.display = 'none';
        button.style.display = 'none';
        return;
    }
    
    const placeholders = {
        'text': 'Describe what text you want to generate...',
        'image': 'Describe the image you want to create...',
        'code': 'Describe the functionality you need...'
    };
    
    document.getElementById('genaiPrompt').placeholder = placeholders[type];
    inputArea.style.display = 'block';
    button.style.display = 'block';
}

function generateContent() {
    const type = document.getElementById('genaiType').value;
    const prompt = document.getElementById('genaiPrompt').value || 'sample content';
    
    const outputs = {
        'text': `Based on the analysis of our customer data, we can identify three key trends: increased engagement with mobile platforms, growing demand for personalized experiences, and higher satisfaction among users who utilize our premium features. These insights suggest opportunities for targeted marketing campaigns and product enhancements.`,
        'image': `A professional business dashboard showing key performance indicators with charts and graphs, set in a modern office environment with clean lines and a blue color scheme.`,
        'code': `function analyzeSalesData(data) {
    const totalSales = data.reduce((sum, item) => sum + item.amount, 0);
    const averageSale = totalSales / data.length;
    const topProducts = data
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 5);
    
    return {
        totalSales,
        averageSale,
        topProducts,
        analysisDate: new Date().toISOString()
    };
}`
    };
    
    document.getElementById('genaiOutput').textContent = outputs[type] || 'Content generated successfully.';
    document.getElementById('genaiResult').style.display = 'block';
}

// Gretel.ai
function generateSyntheticData() {
    document.getElementById('syntheticResult').style.display = 'block';
}

// H2O.ai
function runH2O() {
    const task = document.getElementById('h2oTask').value;
    const metrics = {
        'classification': 'Gradient Boosting Machine (AUC: 0.92, Logloss: 0.24)',
        'regression': 'Distributed Random Forest (RMSE: 1245.8, R²: 0.88)',
        'clustering': 'K-Means (Within SSE: 2450.8, Silhouette: 0.72)'
    };
    
    document.getElementById('h2oResult').innerHTML = `
        <strong>✅ H2O AutoML Complete!</strong>
        <p>Leaderboard model: ${metrics[task]}</p>
        <p>Training time: 3.2 minutes across 20 models</p>
    `;
    document.getElementById('h2oResult').style.display = 'block';
}

// Hazy
function generateHazyData() {
    document.getElementById('hazyResult').style.display = 'block';
}

// IBM Watson Discovery
function processDocument() {
    const type = document.getElementById('documentType').value;
    const insights = {
        'contract': 'Key clauses: Termination (Section 4.3), Payment Terms (Section 2.1), Confidentiality (Section 5)',
        'report': 'Key findings: Revenue growth 15%, Customer satisfaction 4.5/5, Market share increased 3%',
        'email': 'Main topics: Project timeline, Budget approval, Team assignments, Next meeting: Friday 2 PM'
    };
    
    document.getElementById('discoveryResult').innerHTML = `
        <strong>✅ Insights Extracted!</strong>
        <p>• ${insights[type]}</p>
        <p>• Sentiment: Neutral/Positive</p>
        <p>• Key entities identified: 12</p>
    `;
    document.getElementById('discoveryResult').style.display = 'block';
}

// Image Recognition
function setupImageRecognition() {
    showImageExample();
}

function showImageExample() {
    const type = document.getElementById('imageType').value;
    const example = document.getElementById('imageExample');
    const button = document.getElementById('recognizeButton');
    
    if (!type) {
        example.style.display = 'none';
        button.style.display = 'none';
        return;
    }
    
    const examples = {
        'product': 'Product Image: Smartphone on white background',
        'document': 'Document Image: Business report with charts and tables',
        'scene': 'Scene Image: Office environment with people working'
    };
    
    example.innerHTML = `
        <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; text-align: center;">
            <div style="font-size: 3rem;">${type === 'product' ? '📱' : type === 'document' ? '📄' : '🏢'}</div>
            <p>${examples[type]}</p>
        </div>
    `;
    example.style.display = 'block';
    button.style.display = 'block';
}

function recognizeImage() {
    const type = document.getElementById('imageType').value;
    
    const results = {
        'product': 'Object: Smartphone | Brand: Likely Apple iPhone | Condition: New | Confidence: 94%',
        'document': 'Type: Business Report | Pages: 12 | Key elements: Charts, Tables, Headers | Confidence: 89%',
        'scene': 'Setting: Modern Office | People: 3 detected | Activities: Working on computers | Objects: Desks, chairs, monitors | Confidence: 91%'
    };
    
    document.getElementById('recognitionText').textContent = results[type];
    document.getElementById('recognitionResult').style.display = 'block';
}

// Data Imputation
function imputeData() {
    document.getElementById('imputationResult').innerHTML = `
        <strong>✅ Data Imputed!</strong>
        <p>• Missing age: 38.5 (mean imputation from dataset)</p>
        <p>• Missing status: Active (mode imputation from column)</p>
        <p>• Imputation method: K-Nearest Neighbors (k=5)</p>
    `;
    document.getElementById('imputationResult').style.display = 'block';
}

// Index Recommendations
function recommendIndex() {
    document.getElementById('indexResult').innerHTML = `
        <strong>✅ Index Recommendations:</strong>
        <p>1. CREATE INDEX idx_email ON customers(email)</p>
        <p>2. CREATE INDEX idx_date ON customers(created_date DESC)</p>
        <p>3. CREATE INDEX idx_status_email ON customers(status, email)</p>
        <p><strong>Estimated improvement:</strong> 85% faster queries</p>
        <p><strong>Storage cost:</strong> Additional 245 MB</p>
    `;
    document.getElementById('indexResult').style.display = 'block';
}

// Infogram
function createInfogram() {
    const type = document.getElementById('infogramType').value;
    const types = {
        'infographic': 'Interactive Infographic with 5 data visualization sections',
        'chart': 'Dynamic Chart with hover effects and data filtering',
        'map': 'Geographic Map showing regional distribution'
    };
    
    document.getElementById('infogramResult').innerHTML = `
        <div style="font-size: 2rem;">📈</div>
        <strong>✅ ${types[type]} Created!</strong>
        <p>Shareable link generated | Embed code available</p>
        <p>Estimated design time saved: 2.5 hours</p>
    `;
    document.getElementById('infogramResult').style.display = 'block';
}

// Intelligent Auto-completion
function showSuggestions() {
    document.getElementById('autoCompleteResult').style.display = 'block';
}

// Interactive Chart
function createInteractiveChart() {
    const ctx = document.getElementById('interactiveChart');
    if (!ctx) return;
    
    currentCharts.interactive = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Product A',
                    data: [65000, 59000, 80000, 81000, 92000, 105000],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Product B',
                    data: [45000, 52000, 61000, 58000, 72000, 68000],
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Revenue ($)'
                    }
                }
            }
        }
    });
}

function filterData(period) {
    if (!currentCharts.interactive) return;
    
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const dataA = [65000, 59000, 80000, 81000, 92000, 105000];
    const dataB = [45000, 52000, 61000, 58000, 72000, 68000];
    
    let filteredLabels, filteredDataA, filteredDataB;
    
    if (period === 'q1') {
        filteredLabels = labels.slice(0, 3);
        filteredDataA = dataA.slice(0, 3);
        filteredDataB = dataB.slice(0, 3);
    } else if (period === 'q2') {
        filteredLabels = labels.slice(3, 6);
        filteredDataA = dataA.slice(3, 6);
        filteredDataB = dataB.slice(3, 6);
    } else {
        filteredLabels = labels;
        filteredDataA = dataA;
        filteredDataB = dataB;
    }
    
    currentCharts.interactive.data.labels = filteredLabels;
    currentCharts.interactive.data.datasets[0].data = filteredDataA;
    currentCharts.interactive.data.datasets[1].data = filteredDataB;
    currentCharts.interactive.update();
}

// Join Optimization
function optimizeJoins() {
    document.getElementById('joinResult').style.display = 'block';
}

// Machine Learning Types
function setupMLTypeSelect() {
    showMLExample();
}

function showMLExample() {
    const type = document.getElementById('mlType').value;
    const example = document.getElementById('mlExample');
    const desc = document.getElementById('mlDesc');
    
    if (!type) {
        example.style.display = 'none';
        return;
    }
    
    const examples = {
        'supervised': 'Email spam classification: Model trained on labeled emails (spam/not spam) learns to classify new emails.',
        'unsupervised': 'Customer segmentation: Algorithm groups customers based on purchase behavior without predefined categories.',
        'reinforcement': 'Inventory optimization: System learns optimal stock levels through trial and error with reward signals.'
    };
    
    desc.textContent = examples[type];
    example.style.display = 'block';
}

// Measurement Bias
function fixMeasurementBias() {
    document.getElementById('measurementResult').innerHTML = `
        <strong>✅ Bias Fixed:</strong>
        <p>• Revised question: "How satisfied are you with our service?" (neutral wording)</p>
        <p>• Response scale: Changed to 1-5 Likert scale</p>
        <p>• Added validation: Check for straight-line responses</p>
        <p>• Response accuracy improved by 42%</p>
        <p>• Data quality score: 92/100</p>
    `;
    document.getElementById('measurementResult').style.display = 'block';
}

// Misrepresentation
function fixMisrepresentation() {
    document.getElementById('representationResult').innerHTML = `
        <strong>✅ Representation Fixed:</strong>
        <p>• Chart Y-axis now starts at 0 (accurate proportional differences)</p>
        <p>• Added data labels for exact values</p>
        <p>• Included error bars showing confidence intervals</p>
        <p>• Added context: Sample size and margin of error displayed</p>
        <p>• Data transparency score: 95/100</p>
    `;
    document.getElementById('representationResult').style.display = 'block';
}

// Mostly AI
function generateMostlyAIData() {
    document.getElementById('mostlyAIResult').innerHTML = `
        <strong>✅ Synthetic Data Generated!</strong>
        <p>• Statistical properties preserved with 98% accuracy</p>
        <p>• Differential privacy guarantee (ε=1.0)</p>
        <p>• Ready for testing and analytics</p>
    `;
    document.getElementById('mostlyAIResult').style.display = 'block';
}

// Multidimensional Baselining
function updateBaseline() {
    document.getElementById('baselineResult').style.display = 'block';
}

// Narrative Science
function generateNarrative() {
    const input = document.getElementById('narrativeData').value || 
                  'Sales increased 15% in Q3, customer satisfaction 4.5/5, market share grew 3%';
    
    document.getElementById('narrativeResult').innerHTML = `
        <strong>📖 Data Story:</strong>
        <p>"Our business demonstrated strong performance in the third quarter, achieving a 15% increase in sales compared to the previous period. Customer satisfaction remained high with an average rating of 4.5 out of 5, reflecting positive customer experiences. Additionally, we expanded our market presence with a 3% growth in market share, indicating successful competitive positioning."</p>
        <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">Generated narrative includes: Key metrics, business context, and actionable insights.</p>
    `;
    document.getElementById('narrativeResult').style.display = 'block';
}

// Natural Language Generation
function generateNLG() {
    const input = document.getElementById('nlgInput').value || 
                  'Q3 sales: $245K, growth: 15%, top product: Laptop Pro';
    
    document.getElementById('nlgResult').innerHTML = `
        <strong>✅ Generated Text:</strong>
        <p>"The third quarter yielded impressive results with sales reaching $245,000, marking a substantial 15% growth from the previous quarter. This performance was primarily driven by the Laptop Pro, which emerged as our best-selling product during this period, demonstrating strong market demand and customer preference for our premium offerings."</p>
    `;
    document.getElementById('nlgResult').style.display = 'block';
}

// Natural Language Processing
function setupNLPSelect() {
    showNLPExample();
}

function showNLPExample() {
    const task = document.getElementById('nlpTask').value;
    const example = document.getElementById('nlpExample');
    const button = document.getElementById('nlpButton');
    
    if (!task) {
        example.style.display = 'none';
        button.style.display = 'none';
        return;
    }
    
    const examples = {
        'sentiment': 'The product exceeded all expectations and the customer service was exceptional!',
        'entities': 'Apple Inc. announced new products at their Cupertino headquarters in California.',
        'summarization': 'The quarterly report indicates strong growth across all regions. Sales increased by 15% and customer satisfaction reached record levels. However, operational costs also rose by 8%, requiring further optimization.'
    };
    
    document.getElementById('nlpInput').value = examples[task];
    example.style.display = 'block';
    button.style.display = 'block';
}

function runNLP() {
    const task = document.getElementById('nlpTask').value;
    const input = document.getElementById('nlpInput').value;
    
    let result = '';
    
    switch(task) {
        case 'sentiment':
            const positiveWords = ['excellent', 'great', 'amazing', 'exceptional', 'love', 'best'];
            const hasPositive = positiveWords.some(word => input.toLowerCase().includes(word));
            result = hasPositive ? 'Sentiment: Positive (Confidence: 92%)' : 'Sentiment: Neutral (Confidence: 76%)';
            break;
        case 'entities':
            result = 'Entities detected: Organization (Apple Inc.), Location (Cupertino, California), Event (product announcement)';
            break;
        case 'summarization':
            result = 'Summary: Strong quarterly growth with 15% sales increase and high customer satisfaction, though operational costs rose by 8%.';
            break;
    }
    
    document.getElementById('nlpOutput').textContent = result;
    document.getElementById('nlpResult').style.display = 'block';
}

// NLP Engine
function processWithNLPEngine() {
    const input = document.getElementById('engineInput').value || 
                  'The customer satisfaction survey showed positive results with 85% approval rating.';
    
    document.getElementById('engineResult').innerHTML = `
        <strong>✅ NLP Processing Complete:</strong>
        <p>• Sentiment: Positive (Score: 0.85)</p>
        <p>• Key Entities: customer satisfaction survey, approval rating</p>
        <p>• Key Phrases: "85% approval rating", "positive results"</p>
        <p>• Language: English (Confidence: 99%)</p>
        <p>• Categories: Customer Feedback, Business Metrics</p>
    `;
    document.getElementById('engineResult').style.display = 'block';
}

// Otter.ai Transcription
function transcribeAudio() {
    document.getElementById('transcriptionResult').innerHTML = `
        <strong>✅ Transcription Complete:</strong>
        <p>"Our Q3 sales increased by 15 percent compared to last quarter, driven primarily by strong performance in the Western region. Customer satisfaction scores also improved, reaching an all-time high of 4.8 out of 5."</p>
        <p>• Speaker identification: Sales Manager (Confidence: 95%)</p>
        <p>• Keywords: Q3, sales, increased, 15 percent, customer satisfaction</p>
        <p>• Meeting duration: 2 minutes, 15 seconds</p>
    `;
    document.getElementById('transcriptionResult').style.display = 'block';
}

// Outerbase
function runDBAction() {
    const action = document.getElementById('dbAction').value;
    
    const results = {
        'query': 'Query executed: SELECT * FROM customers WHERE status="active" LIMIT 100',
        'schema': 'Schema analyzed: 15 tables, 245 columns, 3.2M rows total',
        'optimize': 'Database optimized: Indexes rebuilt, query cache cleared, performance improved 35%'
    };
    
    document.getElementById('dbResult').innerHTML = `
        <strong>✅ Database Action Complete:</strong>
        <p>${results[action]}</p>
        <p>Execution time: 0.4 seconds</p>
        <p>Rows affected: ${action === 'query' ? '245' : '0'}</p>
    `;
    document.getElementById('dbResult').style.display = 'block';
}

// Overfitting Chart
function createOverfittingChart() {
    const ctx = document.getElementById('overfittingChart');
    if (!ctx) return;
    
    currentCharts.overfitting = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: Array.from({length: 20}, (_, i) => `Point ${i+1}`),
            datasets: [
                {
                    label: 'Training Data',
                    data: Array.from({length: 20}, () => Math.random() * 100),
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0
                },
                {
                    label: 'Simple Model',
                    data: Array.from({length: 20}, (_, i) => 50 + i * 2 + Math.random() * 10),
                    borderColor: '#2ecc71',
                    borderWidth: 2,
                    tension: 0.4
                },
                {
                    label: 'Complex Model',
                    data: Array.from({length: 20}, (_, i) => 50 + i * 2 + Math.random() * 30 - 15),
                    borderColor: '#e74c3c',
                    borderWidth: 3,
                    tension: 0.8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Prediction Value'
                    }
                }
            }
        }
    });
}

// Picture Classification
function classifyImage() {
    document.getElementById('classificationResult').innerHTML = `
        <strong>✅ Classification Result:</strong>
        <p>Category: Electronics / Mobile Devices</p>
        <p>Confidence: 94%</p>
        <p>Labels: smartphone, mobile device, technology, electronics, communication</p>
        <p>Brand Prediction: Apple iPhone (65% confidence)</p>
        <p>Condition: New (88% confidence)</p>
    `;
    document.getElementById('classificationResult').style.display = 'block';
}

// Power BI Chart
function createPowerBIChart() {
    const ctx = document.getElementById('powerBIChart');
    if (!ctx) return;
    
    currentCharts.powerBI = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales Trend',
                data: [85000, 92000, 105000, 98000, 112000, 125000],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Sales ($)'
                    }
                }
            }
        }
    });
}

function refreshPowerBI() {
    if (currentCharts.powerBI) {
        const newData = currentCharts.powerBI.data.datasets[0].data.map(
            val => val + Math.random() * 10000 - 5000
        );
        currentCharts.powerBI.data.datasets[0].data = newData;
        currentCharts.powerBI.update();
        
        // Update dashboard numbers
        const regions = document.querySelectorAll('#powerBI .control-btn + div div');
        if (regions.length >= 2) {
            const west = 124000 + Math.floor(Math.random() * 10000);
            const east = 98000 + Math.floor(Math.random() * 8000);
            regions[0].innerHTML = `<span>West</span><span>$${west.toLocaleString()}</span>`;
            regions[1].innerHTML = `<span>East</span><span>$${east.toLocaleString()}</span>`;
        }
    }
}

// Predictive Chart
function createPredictiveChart() {
    const ctx = document.getElementById('predictiveChart');
    if (!ctx) return;
    
    const historical = [85, 92, 105, 98, 112, 125];
    const predicted = [130, 138, 145, 152, 160];
    
    currentCharts.predictive = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
            datasets: [
                {
                    label: 'Historical',
                    data: [...historical, ...Array(predicted.length).fill(null)],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Prediction',
                    data: [...Array(historical.length).fill(null), ...predicted],
                    borderColor: '#e74c3c',
                    borderWidth: 3,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Confidence Interval',
                    data: [...Array(historical.length).fill(null), ...predicted.map(v => v * 1.05)],
                    borderColor: 'rgba(231, 76, 60, 0.3)',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 1,
                    fill: '+1',
                    tension: 0.4
                },
                {
                    label: '',
                    data: [...Array(historical.length).fill(null), ...predicted.map(v => v * 0.95)],
                    borderColor: 'rgba(231, 76, 60, 0.3)',
                    borderWidth: 1,
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        filter: function(item, chart) {
                            return !item.text || item.text.length > 0;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Sales ($ thousands)'
                    }
                }
            }
        }
    });
}

function updatePrediction(scenario) {
    if (!currentCharts.predictive) return;
    
    const factors = {
        'optimistic': 1.1,
        'neutral': 1.0,
        'pessimistic': 0.9
    };
    
    const base = [130, 138, 145, 152, 160];
    const adjusted = base.map(v => v * factors[scenario]);
    
    // Update prediction line
    currentCharts.predictive.data.datasets[1].data = [
        ...Array(6).fill(null),
        ...adjusted
    ];
    
    // Update confidence interval
    currentCharts.predictive.data.datasets[2].data = [
        ...Array(6).fill(null),
        ...adjusted.map(v => v * 1.05)
    ];
    
    currentCharts.predictive.data.datasets[3].data = [
        ...Array(6).fill(null),
        ...adjusted.map(v => v * 0.95)
    ];
    
    currentCharts.predictive.update();
    
    // Update prediction text
    const nextQuarter = adjusted[2];
    const range = nextQuarter * 0.05;
    document.querySelector('#predictiveChart').parentElement.innerHTML += 
        `<div style="margin-top: 10px; padding: 8px; background: #e8f4f8; border-radius: 8px;">
            <strong>Updated Prediction (${scenario} scenario):</strong> Next quarter sales: $${Math.round(nextQuarter)}K ± $${Math.round(range)}K
        </div>`;
}

// Qlik Sense
function associateData() {
    document.getElementById('qlikResult').innerHTML = `
        <strong>✅ Data Associated!</strong>
        <p>• Found 3 strong associations between sentiment and churn risk</p>
        <p>• Negative reviews correlate with 45% higher churn probability</p>
        <p>• Positive reviews with low engagement still show 25% churn risk</p>
        <p>• Association strength: 0.78 (Strong)</p>
    `;
    document.getElementById('qlikResult').style.display = 'block';
}

// Scenario Modeling
function setupScenarioSlider() {
    updateScenario();
}

function updateScenario() {
    const value = document.getElementById('scenarioSlider').value;
    document.getElementById('scenarioValue').textContent = value;
}

function runScenario() {
    const type = document.getElementById('scenarioType').value;
    const value = parseInt(document.getElementById('scenarioValue').value);
    
    const impacts = {
        'price': {
            revenue: value * 0.8,
            profit: value * 1.2,
            volume: -value * 0.5
        },
        'demand': {
            revenue: value * 1.5,
            profit: value * 1.3,
            volume: value * 1.2
        },
        'cost': {
            revenue: 0,
            profit: value * 1.8,
            volume: 0
        }
    };
    
    const impact = impacts[type];
    
    document.getElementById('revenueImpact').textContent = impact.revenue.toFixed(1);
    document.getElementById('profitImpact').textContent = impact.profit.toFixed(1);
    
    document.getElementById('scenarioResult').innerHTML = `
        <strong>Scenario Results (${value}% ${type} change):</strong>
        <p>• Revenue impact: ${impact.revenue >= 0 ? '+' : ''}${impact.revenue.toFixed(1)}%</p>
        <p>• Profit impact: ${impact.profit >= 0 ? '+' : ''}${impact.profit.toFixed(1)}%</p>
        <p>• Volume impact: ${impact.volume >= 0 ? '+' : ''}${impact.volume.toFixed(1)}%</p>
        <p>• Break-even point: ${(value / 2).toFixed(1)}%</p>
    `;
    document.getElementById('scenarioResult').style.display = 'block';
}

// Segmentation
function segmentData() {
    const field = document.getElementById('segmentationField').value;
    
    const segments = {
        'region': ['West (35%)', 'East (28%)', 'Central (22%)', 'South (15%)'],
        'age': ['18-25 (15%)', '26-35 (30%)', '36-50 (35%)', '51-65 (18%)', '65+ (2%)'],
        'value': ['High Value (8%)', 'Medium Value (25%)', 'Low Value (42%)', 'New (25%)']
    };
    
    const segmentList = segments[field].map(s => `<p>• ${s}</p>`).join('');
    
    document.getElementById('segmentationResult').innerHTML = `
        <strong>✅ Data Segmented by ${field.replace(/^./, c => c.toUpperCase())}!</strong>
        <p>45,238 records divided into ${segments[field].length} segments:</p>
        ${segmentList}
        <p>Segmentation quality score: 0.85/1.0</p>
    `;
    document.getElementById('segmentationResult').style.display = 'block';
}

// Semi-supervised Learning
function runSemiSupervised() {
    document.getElementById('semiResult').innerHTML = `
        <strong>✅ Semi-supervised Learning Complete!</strong>
        <p>• 9,542 unlabeled records classified using 1,000 labeled examples</p>
        <p>• Model accuracy: 88% (validated on test set)</p>
        <p>• Label propagation efficiency: 92% of unlabeled data successfully labeled</p>
        <p>• Time saved vs. manual labeling: 95%</p>
    `;
    document.getElementById('semiResult').style.display = 'block';
}

// Sentiment Analysis
function analyzeSentiment() {
    const input = document.getElementById('sentimentInput').value.toLowerCase();
    
    let sentiment = 'Neutral';
    let emoji = '😐';
    let confidence = 75;
    
    const positiveWords = ['amazing', 'excellent', 'great', 'love', 'best', 'exceeded', 'fast', 'perfect', 'wonderful'];
    const negativeWords = ['terrible', 'awful', 'horrible', 'disappointed', 'bad', 'slow', 'broken', 'useless'];
    
    let positiveCount = 0;
    let negativeCount = 0;
    
    positiveWords.forEach(word => {
        if (input.includes(word)) positiveCount++;
    });
    
    negativeWords.forEach(word => {
        if (input.includes(word)) negativeCount++;
    });
    
    if (positiveCount > negativeCount) {
        sentiment = 'Positive';
        emoji = '😊';
        confidence = 70 + (positiveCount * 5);
    } else if (negativeCount > positiveCount) {
        sentiment = 'Negative';
        emoji = '😞';
        confidence = 70 + (negativeCount * 5);
    }
    
    if (confidence > 100) confidence = 100;
    
    document.getElementById('sentimentEmoji').textContent = emoji;
    document.getElementById('sentimentText').textContent = sentiment;
    document.getElementById('sentimentConfidence').textContent = `${confidence}%`;
    document.getElementById('sentimentResult').style.display = 'block';
}

// SHAP Values
function calculateSHAP() {
    document.getElementById('shapResult').innerHTML = `
        <strong>SHAP Explanation for Churn Prediction:</strong>
        <p>Feature contributions to "Will Churn" prediction (85% probability):</p>
        <p>• Last login >30 days ago: <span style="color: #e74c3c;">+0.35</span> (increases churn probability)</p>
        <p>• Support tickets >5: <span style="color: #e74c3c;">+0.28</span></p>
        <p>• Monthly usage <10 hours: <span style="color: #e74c3c;">+0.22</span></p>
        <p>• Customer tenure <6 months: <span style="color: #e74c3c;">+0.15</span></p>
        <p>• Premium subscription: <span style="color: #27ae60;">-0.18</span> (decreases churn probability)</p>
        <p>• Recent purchase: <span style="color: #27ae60;">-0.12</span></p>
        <p style="margin-top: 10px; font-size: 0.9rem;"><strong>Interpretation:</strong> Customer inactivity and support issues are strongest predictors of churn.</p>
    `;
    document.getElementById('shapResult').style.display = 'block';
}

// Speech Synthesis
function synthesizeSpeech() {
    const input = document.getElementById('speechInput').value || 
                  'Sales increased by 15 percent in the third quarter.';
    
    document.getElementById('speechResult').innerHTML = `
        <div style="font-size: 2rem;">🔊</div>
        <strong>✅ Speech Synthesized!</strong>
        <p>Text: "${input.substring(0, 50)}${input.length > 50 ? '...' : ''}"</p>
        <p>Audio file: speech_output.mp3</p>
        <p>Voice: Natural-sounding female voice (Emma)</p>
        <p>Duration: ${Math.ceil(input.length / 15)} seconds</p>
        <p>Sample rate: 44.1 kHz | Bitrate: 128 kbps</p>
        <button class="control-btn" style="margin-top: 10px;" onclick="playAudioSample()">
            <i class="fas fa-play"></i> Play Sample
        </button>
    `;
    document.getElementById('speechResult').style.display = 'block';
}

function playAudioSample() {
    alert('Audio sample would play here. In a real implementation, this would use the Web Speech API.');
}

// SQL Generation
function generateSQL() {
    const prompt = document.getElementById('sqlPrompt').value || 
                  'Show me all customers from California who spent more than $1000 last month';
    
    document.getElementById('sqlCode').textContent = `-- AI-generated SQL query
-- Generated from: "${prompt}"

SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    c.email,
    c.state,
    SUM(o.amount) as total_spent,
    COUNT(o.order_id) as order_count,
    MAX(o.order_date) as last_order_date
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE c.state = 'CA'
    AND o.order_date >= DATEADD(month, -1, GETDATE())
    AND o.status = 'completed'
GROUP BY 
    c.customer_id,
    c.first_name,
    c.last_name,
    c.email,
    c.state
HAVING SUM(o.amount) > 1000
ORDER BY total_spent DESC
LIMIT 100;`;
    
    document.getElementById('sqlResult').style.display = 'block';
}

// SQL Examples
function setupSQLExamples() {
    showSQLExample();
}

function showSQLExample() {
    const command = document.getElementById('sqlCommand').value;
    const example = document.getElementById('sqlExample');
    const code = document.getElementById('sqlExampleCode');
    
    if (!command) {
        example.style.display = 'none';
        return;
    }
    
    const examples = {
        'select': `-- SELECT: Retrieve data from a table
SELECT 
    customer_id,
    first_name,
    last_name,
    email,
    signup_date
FROM customers
WHERE status = 'active'
    AND signup_date >= '2023-01-01'
ORDER BY signup_date DESC
LIMIT 10;`,
        'insert': `-- INSERT: Add new records to a table
INSERT INTO customers (
    first_name,
    last_name,
    email,
    status,
    signup_date
) VALUES 
    ('John', 'Smith', 'john.smith@email.com', 'active', CURRENT_DATE),
    ('Sarah', 'Johnson', 'sarah.j@email.com', 'active', CURRENT_DATE),
    ('Mike', 'Williams', 'mike.w@email.com', 'pending', CURRENT_DATE);`,
        'update': `-- UPDATE: Modify existing records
UPDATE customers
SET 
    status = 'active',
    last_login = CURRENT_TIMESTAMP,
    login_count = login_count + 1
WHERE customer_id = 1001
    AND status = 'pending';`,
        'delete': `-- DELETE: Remove records from a table
DELETE FROM customers
WHERE status = 'inactive'
    AND last_login < DATEADD(year, -2, GETDATE());`
    };
    
    code.textContent = examples[command];
    example.style.display = 'block';
}

// Tableau
function createTableauViz() {
    document.getElementById('tableauResult').innerHTML = `
        <strong>✅ Tableau Workbook Created!</strong>
        <p>• Interactive dashboard with 5 visualizations</p>
        <p>• Data sources connected: Sales, Customers, Products</p>
        <p>• Filters applied: Date range, Region, Product category</p>
        <p>• Calculated fields: Growth rate, Running total, YoY comparison</p>
        <p>• Shareable link: https://tableau.example.com/dashboards/1234</p>
    `;
    document.getElementById('tableauResult').style.display = 'block';
}

// text2sql.ai
function convertTextToSQL() {
    const input = document.getElementById('text2sqlInput').value || 
                  'Find customers who made purchases in the last 7 days and spent more than $500';
    
    document.querySelector('#text2sqlResult pre').textContent = `-- Generated by text2sql.ai
-- Query for: "${input}"

WITH recent_customers AS (
    SELECT 
        c.customer_id,
        c.first_name,
        c.last_name,
        c.email,
        c.phone,
        c.signup_date,
        COUNT(DISTINCT o.order_id) as purchase_count,
        SUM(o.total_amount) as total_spent,
        MAX(o.order_date) as last_purchase_date
    FROM customers c
    INNER JOIN orders o ON c.customer_id = o.customer_id
    WHERE o.order_status = 'completed'
        AND o.order_date >= CURRENT_DATE - INTERVAL '7 days'
    GROUP BY 
        c.customer_id,
        c.first_name,
        c.last_name,
        c.email,
        c.phone,
        c.signup_date
    HAVING SUM(o.total_amount) > 500
)
SELECT 
    customer_id,
    first_name || ' ' || last_name as customer_name,
    email,
    purchase_count,
    total_spent,
    last_purchase_date,
    CASE 
        WHEN total_spent > 1000 THEN 'High Value'
        WHEN total_spent > 500 THEN 'Medium Value'
        ELSE 'Standard'
    END as customer_segment
FROM recent_customers
ORDER BY total_spent DESC
LIMIT 50;`;
    
    document.getElementById('text2sqlResult').style.display = 'block';
}

// Transformers
function runTransformer() {
    document.getElementById('transformerResult').innerHTML = `
        <strong>✅ Transformer Model Output:</strong>
        <p><strong>Input:</strong> "The quarterly sales report showed significant growth in"</p>
        <p><strong>Output:</strong> "The quarterly sales report showed significant growth in the European markets, with a 25% increase compared to the previous quarter. This performance was driven by successful marketing campaigns and new product launches."</p>
        <p><strong>Model:</strong> GPT-3.5 (175B parameters)</p>
        <p><strong>Inference time:</strong> 1.2 seconds</p>
        <p><strong>Tokens generated:</strong> 28</p>
    `;
    document.getElementById('transformerResult').style.display = 'block';
}

// Variational Autoencoder
function runVAE() {
    document.getElementById('vaeResult').innerHTML = `
        <strong>✅ VAE Training Complete!</strong>
        <p>• Input dimension: 784 (28×28 image)</p>
        <p>• Latent space dimension: 32 (compressed representation)</p>
        <p>• Reconstruction dimension: 784 (reconstructed image)</p>
        <p>• Training loss: 0.023 (KL Divergence + Reconstruction)</p>
        <p>• Validation loss: 0.027</p>
        <p>• Training time: 45 minutes (100 epochs)</p>
        <p>• Sample generation quality: 4.2/5.0 (human evaluation)</p>
    `;
    document.getElementById('vaeResult').style.display = 'block';
}

// Schema Analysis Performance
function analyzeSchemaPerformance() {
    document.getElementById('schemaPerformance').innerHTML = `
        <strong>Schema Performance Analysis:</strong>
        <p>• Estimated rows affected: 45,238</p>
        <p>• Current execution plan: Full table scan</p>
        <p>• Estimated cost: 2.3 (high)</p>
        <p><strong>Recommendations:</strong></p>
        <p>1. Create index: CREATE INDEX idx_date ON large_table(date)</p>
        <p>2. Add covering index: CREATE INDEX idx_date_covering ON large_table(date) INCLUDE (column1, column2, column3)</p>
        <p>3. Partition table by date range</p>
        <p><strong>Expected improvement:</strong> Cost reduced to 0.4 (83% faster)</p>
    `;
    document.getElementById('schemaPerformance').style.display = 'block';
}

// Additional helper functions
function analyzeSchemaPerformance() {
    document.getElementById('schemaPerformance').innerHTML = `
        <strong>Schema Performance Analysis:</strong>
        <p>• Estimated rows affected: 45,238</p>
        <p>• Current execution plan: Full table scan</p>
        <p>• Estimated cost: 2.3 (high)</p>
        <p><strong>Recommendations:</strong></p>
        <p>1. Create index: CREATE INDEX idx_date ON large_table(date)</p>
        <p>2. Add covering index: CREATE INDEX idx_date_covering ON large_table(date) INCLUDE (column1, column2, column3)</p>
        <p>3. Partition table by date range</p>
        <p><strong>Expected improvement:</strong> Cost reduced to 0.4 (83% faster)</p>
    `;
    document.getElementById('schemaPerformance').style.display = 'block';
}

function runAzureService() {
    const service = document.getElementById('azureService').value;
    const input = document.getElementById('azureInput').value;
    
    let result = '';
    switch(service) {
        case 'vision':
            result = 'Detected: Business presentation slide with charts and text. Confidence: 92%. Tags: presentation, chart, data, business.';
            break;
        case 'language':
            result = 'Sentiment: Positive (0.85). Key phrases: excellent performance, strong growth, market leadership. Entities: Company (Microsoft), Person (CEO), Location (Redmond).';
            break;
        case 'speech':
            result = 'Transcription: "The quarterly earnings call will begin at 2 PM Eastern Time. Please have your reports ready for discussion." Speaker: Female, Confidence: 96%.';
            break;
    }
    
    document.getElementById('azureOutput').textContent = result;
    document.getElementById('azureResult').style.display = 'block';
}

// Fix any missing data table functions
function fixMeasurementBias() {
    document.getElementById('measurementResult').innerHTML = `
        <strong>✅ Bias Fixed:</strong>
        <p>• Revised question: "How satisfied are you with our service?" (neutral wording)</p>
        <p>• Response scale: Changed to 1-5 Likert scale</p>
        <p>• Added validation: Check for straight-line responses</p>
        <p>• Response accuracy improved by 42%</p>
        <p>• Data quality score: 92/100</p>
    `;
    document.getElementById('measurementResult').style.display = 'block';
}

function fixMisrepresentation() {
    document.getElementById('representationResult').innerHTML = `
        <strong>✅ Representation Fixed:</strong>
        <p>• Chart Y-axis now starts at 0 (accurate proportional differences)</p>
        <p>• Added data labels for exact values</p>
        <p>• Included error bars showing confidence intervals</p>
        <p>• Added context: Sample size and margin of error displayed</p>
        <p>• Data transparency score: 95/100</p>
    `;
    document.getElementById('representationResult').style.display = 'block';
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('termModal');
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            // Navigate to previous term
            navigateTerm(-1);
        } else if (e.key === 'ArrowRight') {
            // Navigate to next term
            navigateTerm(1);
        }
    }
});

function navigateTerm(direction) {
    if (!activeExampleId) return;
    
    const currentIndex = glossaryData.findIndex(t => t.id === activeExampleId);
    if (currentIndex === -1) return;
    
    const newIndex = (currentIndex + direction + glossaryData.length) % glossaryData.length;
    openModal(glossaryData[newIndex].id);
}

// Add loading state for better UX
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const originalHTML = container.innerHTML;
        container.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div class="spinner"></div>
                <p>Loading example...</p>
            </div>
        `;
        setTimeout(() => {
            container.innerHTML = originalHTML;
        }, 800);
    }
}

// Add CSS for spinner
const style = document.createElement('style');
style.textContent = `
    .spinner {
        border: 3px solid #f3f3f3;
        border-top: 3px solid #3498db;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 0 auto 10px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .term-card {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .term-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    
    .modal-content {
        animation: modalFadeIn 0.3s ease;
    }
    
    @keyframes modalFadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Make sure all chart canvases are properly sized
window.addEventListener('resize', function() {
    Object.values(currentCharts).forEach(chart => {
        if (chart && typeof chart.resize === 'function') {
            chart.resize();
        }
    });
});

// Add tooltip to category badges
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('term-category')) {
        const category = e.target.textContent;
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = `Filter by ${category}`;
        tooltip.style.position = 'absolute';
        tooltip.style.background = '#333';
        tooltip.style.color = 'white';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.fontSize = '12px';
        tooltip.style.zIndex = '1000';
        document.body.appendChild(tooltip);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - 30) + 'px';
        
        e.target._tooltip = tooltip;
    }
}, true);

document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('term-category') && e.target._tooltip) {
        e.target._tooltip.remove();
        e.target._tooltip = null;
    }
}, true);

// Initialize any remaining interactive elements
function initializeRemainingElements() {
    // Setup any remaining select elements
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        if (!select.hasAttribute('data-initialized')) {
            select.setAttribute('data-initialized', 'true');
            select.addEventListener('change', function() {
                const termId = activeExampleId;
                if (termId) {
                    // Re-initialize based on select change
                    const term = glossaryData.find(t => t.id === termId);
                    if (term) {
                        initializeExample(term);
                    }
                }
            });
        }
    });
}

// Call this after modal opens
setTimeout(initializeRemainingElements, 100);