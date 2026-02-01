// Glossary Data - 20 Terms with Working Examples
const glossaryData = [
    {
        id: 1,
        term: "Akkio",
        definition: "A no-code AI platform allows users to create and deploy predictive models and generate reports.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🚀 No-Code AI Platform Demo</div>
                <p>Try building a predictive model without coding:</p>
                <div style="margin: 15px 0;">
                    <div style="margin: 10px 0;">
                        <label>Select Dataset:</label>
                        <select id="datasetSelect" style="padding: 5px; border-radius: 4px; margin-left: 10px;">
                            <option value="sales">Sales Data</option>
                            <option value="customers">Customer Data</option>
                            <option value="inventory">Inventory Data</option>
                        </select>
                    </div>
                    <div style="margin: 10px 0;">
                        <label>Target Variable:</label>
                        <select id="targetSelect" style="padding: 5px; border-radius: 4px; margin-left: 10px;">
                            <option value="revenue">Revenue Prediction</option>
                            <option value="churn">Customer Churn</option>
                            <option value="demand">Product Demand</option>
                        </select>
                    </div>
                    <button onclick="runAkkioDemo()" class="control-btn">Build AI Model</button>
                </div>
                <div id="akkioResult" style="display:none; padding: 15px; background: #e8f4f8; border-radius: 8px; margin-top: 15px;">
                    <strong>✅ Model Created Successfully!</strong>
                    <p>Accuracy: 89% | Prediction Speed: 2.3ms | Ready for deployment</p>
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
                <div class="demo-title">⚖️ Bias Detection Demo</div>
                <p>Test how an AI hiring algorithm might show bias:</p>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Candidate</th>
                            <th>Experience</th>
                            <th>Education</th>
                            <th>Gender</th>
                            <th>AI Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alex Johnson</td>
                            <td>5 years</td>
                            <td>Masters</td>
                            <td>Male</td>
                            <td style="color: green;">92/100</td>
                        </tr>
                        <tr>
                            <td>Maria Garcia</td>
                            <td>6 years</td>
                            <td>Masters</td>
                            <td>Female</td>
                            <td style="color: orange;">78/100</td>
                        </tr>
                        <tr>
                            <td>David Chen</td>
                            <td>4 years</td>
                            <td>PhD</td>
                            <td>Male</td>
                            <td style="color: green;">88/100</td>
                        </tr>
                        <tr>
                            <td>Sarah Williams</td>
                            <td>7 years</td>
                            <td>PhD</td>
                            <td>Female</td>
                            <td style="color: orange;">81/100</td>
                        </tr>
                    </tbody>
                </table>
                <button onclick="detectBias()" class="control-btn">Detect Bias</button>
                <div id="biasResult" style="display:none; padding: 15px; background: #fff3cd; border-radius: 8px; margin-top: 15px;">
                    <strong>⚠️ Bias Detected!</strong>
                    <p>Male candidates scored 15% higher on average despite similar qualifications.</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        term: "Alteryx",
        definition: "AI tool used to connect to various data sources, blend the data, and apply cleansing operations.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔗 Data Blending Workflow</div>
                <p>Drag and drop to create a data pipeline:</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin: 15px 0;">
                    <div style="padding: 10px; background: #e3f2fd; border-radius: 8px; cursor: move;">Salesforce Data</div>
                    <div style="padding: 10px; background: #e3f2fd; border-radius: 8px; cursor: move;">Google Analytics</div>
                    <div style="padding: 10px; background: #e3f2fd; border-radius: 8px; cursor: move;">SQL Database</div>
                </div>
                <div style="height: 100px; border: 2px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin: 15px 0;">
                    <span style="color: #666;">Drop data sources here to blend</span>
                </div>
                <button onclick="runAlteryxWorkflow()" class="control-btn">Run Data Blend</button>
                <div id="alteryxResult" style="display:none; padding: 15px; background: #d1ecf1; border-radius: 8px; margin-top: 15px;">
                    <strong>✅ Data Blended Successfully!</strong>
                    <p>3 datasets merged | 245 duplicates removed | Ready for analysis</p>
                </div>
            </div>
        `
    },
    {
        id: 4,
        term: "Anomaly Detection",
        definition: "The process of identifying observations that deviate from usual behavior within a data set.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔍 Anomaly Detection Demo</div>
                <p>AI detects unusual patterns in transaction data:</p>
                <div class="visualization-container">
                    <canvas id="anomalyChart"></canvas>
                </div>
                <div class="live-example-controls">
                    <button onclick="addAnomaly()" class="control-btn">Add Random Transaction</button>
                    <button onclick="resetAnomalyChart()" class="control-btn">Reset Chart</button>
                </div>
                <div id="anomalyAlert" style="display:none; padding: 15px; background: #f8d7da; border-radius: 8px; margin-top: 15px;">
                    <strong>🚨 Anomaly Detected!</strong>
                    <p>Unusual transaction pattern detected at 2:15 PM - $5,420 (Normal range: $100-$500)</p>
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
                <p>Simulated data streams flowing through Kafka:</p>
                <div style="margin: 15px 0;">
                    <div style="display: flex; align-items: center; margin: 10px 0;">
                        <div style="width: 20px; height: 20px; background: #3498db; border-radius: 50%; margin-right: 10px;"></div>
                        <span>Website Clicks: <span id="clickCount">0</span>/sec</span>
                    </div>
                    <div style="display: flex; align-items: center; margin: 10px 0;">
                        <div style="width: 20px; height: 20px; background: #2ecc71; border-radius: 50%; margin-right: 10px;"></div>
                        <span>IoT Sensors: <span id="sensorCount">0</span>/sec</span>
                    </div>
                    <div style="display: flex; align-items: center; margin: 10px 0;">
                        <div style="width: 20px; height: 20px; background: #9b59b6; border-radius: 50%; margin-right: 10px;"></div>
                        <span>Mobile App: <span id="appCount">0</span>/sec</span>
                    </div>
                </div>
                <button onclick="startKafkaStream()" class="control-btn">Start Data Stream</button>
                <button onclick="stopKafkaStream()" class="control-btn">Stop Stream</button>
            </div>
        `
    },
    {
        id: 6,
        term: "Ask Data",
        definition: "A Tableau feature that allows asking questions from data using natural language.",
        category: "viz",
        example: `
            <div class="example-demo">
                <div class="demo-title">💬 Natural Language Query</div>
                <div class="chat-interface">
                    <div class="chat-messages" id="askDataMessages">
                        <div class="message ai-message">
                            <strong>Ask Data:</strong> Hi! I'm your data assistant. Ask me anything about your sales data.
                        </div>
                        <div class="message user-message">
                            <strong>You:</strong> What were our top products last quarter?
                        </div>
                        <div class="message ai-message">
                            <strong>Ask Data:</strong> In Q3, your top products were:<br>
                            1. Premium Laptop Pro - $245,000<br>
                            2. Wireless Headphones - $187,500<br>
                            3. 4K Monitor - $156,800
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <input type="text" class="chat-input" id="askDataInput" placeholder="Ask a question about your data...">
                        <div style="margin-top: 10px; font-size: 0.9rem; color: #666;">
                            Try: "Show sales by region" or "Compare this month to last month"
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 7,
        term: "Automated Dashboard Creation",
        definition: "AI tools create complete dashboards with related charts and visualizations automatically.",
        category: "viz",
        example: `
            <div class="example-demo">
                <div class="demo-title">📊 AI-Generated Dashboard</div>
                <p>AI analyzes your data and creates a dashboard:</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 15px 0;">
                    <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.9rem; color: #666;">Total Revenue</div>
                        <div style="font-size: 1.5rem; font-weight: bold;">$245,820</div>
                        <div style="font-size: 0.9rem; color: #27ae60;">↑ 12.5%</div>
                    </div>
                    <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.9rem; color: #666;">New Customers</div>
                        <div style="font-size: 1.5rem; font-weight: bold;">1,245</div>
                        <div style="font-size: 0.9rem; color: #27ae60;">↑ 8.2%</div>
                    </div>
                    <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.9rem; color: #666;">Avg. Order Value</div>
                        <div style="font-size: 1.5rem; font-weight: bold;">$187.50</div>
                        <div style="font-size: 0.9rem; color: #27ae60;">↑ 5.3%</div>
                    </div>
                    <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.9rem; color: #666;">Conversion Rate</div>
                        <div style="font-size: 1.5rem; font-weight: bold;">4.8%</div>
                        <div style="font-size: 0.9rem; color: #27ae60;">↑ 0.7%</div>
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
                <p>AI automatically discovers which data features are most important:</p>
                <div class="visualization-container">
                    <canvas id="featureChart"></canvas>
                </div>
                <div style="margin: 15px 0;">
                    <p><strong>AI Discovered:</strong> Customer tenure and monthly charges are the strongest predictors of churn.</p>
                </div>
                <button onclick="analyzeFeatures()" class="control-btn">Analyze New Dataset</button>
            </div>
        `
    },
    {
        id: 9,
        term: "Automatic Data Visualization",
        definition: "AI tools analyze data and recommend the most appropriate chart type.",
        category: "viz",
        example: `
            <div class="example-demo">
                <div class="demo-title">📈 Smart Chart Recommendations</div>
                <p>AI suggests the best chart for your data:</p>
                <div style="margin: 15px 0;">
                    <select id="dataTypeSelect" onchange="recommendChart()" style="padding: 8px; border-radius: 4px; width: 100%;">
                        <option value="">Select data type...</option>
                        <option value="timeseries">Time Series Data</option>
                        <option value="categories">Category Comparison</option>
                        <option value="distribution">Data Distribution</option>
                        <option value="geographic">Geographic Data</option>
                    </select>
                </div>
                <div id="chartRecommendation" style="padding: 15px; background: #e8f4f8; border-radius: 8px; margin-top: 15px; display: none;">
                    <strong>AI Recommendation:</strong> <span id="recommendedChart"></span>
                </div>
                <div id="chartPreview" style="margin-top: 15px;"></div>
            </div>
        `
    },
    {
        id: 10,
        term: "Business Intelligence (BI) Lifecycle",
        definition: "An iterative process that transforms data into actionable insights.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔄 BI Lifecycle Interactive</div>
                <p>Click through the BI lifecycle stages:</p>
                <div style="display: flex; flex-direction: column; gap: 10px; margin: 15px 0;">
                    <button onclick="showBIStage(1)" class="control-btn" style="text-align: left;">
                        1. Data Collection - Gather data from sources
                    </button>
                    <button onclick="showBIStage(2)" class="control-btn" style="text-align: left;">
                        2. Data Preparation - Clean and transform data
                    </button>
                    <button onclick="showBIStage(3)" class="control-btn" style="text-align: left;">
                        3. Data Analysis - Apply analytics and ML
                    </button>
                    <button onclick="showBIStage(4)" class="control-btn" style="text-align: left;">
                        4. Data Visualization - Create dashboards
                    </button>
                    <button onclick="showBIStage(5)" class="control-btn" style="text-align: left;">
                        5. Decision Making - Use insights for decisions
                    </button>
                </div>
                <div id="biStageDetail" style="padding: 15px; background: #f8f9fa; border-radius: 8px; margin-top: 15px; display: none;">
                    <strong>Stage Details:</strong> <span id="stageText"></span>
                </div>
            </div>
        `
    },
    {
        id: 11,
        term: "ChatGPT",
        definition: "OpenAI can help BI analysts craft compelling narratives based on data insights.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">✍️ AI-Powered Report Writing</div>
                <div class="chat-interface">
                    <div class="chat-messages" id="chatGPTMessages">
                        <div class="message ai-message">
                            <strong>ChatGPT:</strong> I can help you write reports based on data insights. Try asking for an executive summary.
                        </div>
                        <div class="message user-message">
                            <strong>You:</strong> Write an executive summary about Q3 sales performance
                        </div>
                        <div class="message ai-message">
                            <strong>ChatGPT:</strong> Q3 sales showed strong growth with a 15% increase overall. The Western region led with 22% growth, while the Northeast saw a slight decline of 3%. New product launches contributed significantly to revenue.
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <input type="text" class="chat-input" id="chatGPTInput" placeholder="Ask for a report or summary...">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 12,
        term: "Clustering",
        definition: "Unsupervised machine learning task of grouping similar data points together.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">👥 Customer Segmentation Demo</div>
                <p>Adjust customer attributes to see which cluster they belong to:</p>
                <div style="margin: 15px 0;">
                    <div style="margin: 10px 0;">
                        <label>Purchase Frequency: <span id="freqValue">12</span>/month</label>
                        <input type="range" min="1" max="30" value="12" oninput="updateCluster()" id="freqSlider" style="width: 100%;">
                    </div>
                    <div style="margin: 10px 0;">
                        <label>Average Order Value: $<span id="valueValue">120</span></label>
                        <input type="range" min="10" max="500" value="120" oninput="updateCluster()" id="valueSlider" style="width: 100%;">
                    </div>
                </div>
                <div style="padding: 20px; text-align: center; font-size: 1.2rem; font-weight: bold; border-radius: 8px; margin: 15px 0; background: #e3f2fd;" id="clusterResult">
                    Calculating cluster...
                </div>
                <button onclick="resetClustering()" class="control-btn">Reset Example</button>
            </div>
        `
    },
    {
        id: 13,
        term: "Confirmation Bias",
        definition: "Bias referring to analysts interpreting data to confirm existing beliefs.",
        category: "bias",
        example: `
            <div class="example-demo">
                <div class="demo-title">🧠 Confirmation Bias Test</div>
                <p>Do you see what you want to see in this data?</p>
                <div style="margin: 15px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <p><strong>Scenario:</strong> You believe your new feature is successful.</p>
                    <p>Positive data: 60% of users tried the feature</p>
                    <p>Negative data: 40% of users abandoned after first use</p>
                </div>
                <div style="margin: 15px 0;">
                    <button onclick="showBiasedView()" class="control-btn">Show Biased Analysis</button>
                    <button onclick="showCompleteView()" class="control-btn">Show Complete Analysis</button>
                </div>
                <div id="biasAnalysis" style="display:none; padding: 15px; background: #fff3cd; border-radius: 8px; margin-top: 15px;">
                    <strong>Analysis:</strong> <span id="analysisText"></span>
                </div>
            </div>
        `
    },
    {
        id: 14,
        term: "Data Cleansing and Preparation",
        definition: "The process of fixing or removing incorrect, corrupted, or incomplete data.",
        category: "data",
        example: `
            <div class="example-demo">
                <div class="demo-title">🧹 Data Cleaning Dashboard</div>
                <p>AI identifies and fixes data quality issues:</p>
                <div style="margin: 15px 0;">
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <span>Missing Values</span>
                        <span id="missingCount" style="background: #f39c12; color: white; padding: 2px 8px; border-radius: 10px;">245 issues</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <span>Duplicate Records</span>
                        <span id="duplicateCount" style="background: #f39c12; color: white; padding: 2px 8px; border-radius: 10px;">102 issues</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: #f8f9fa; border-radius: 8px; margin: 5px 0;">
                        <span>Format Inconsistencies</span>
                        <span id="formatCount" style="background: #f39c12; color: white; padding: 2px 8px; border-radius: 10px;">189 issues</span>
                    </div>
                </div>
                <button onclick="cleanData()" class="control-btn">Run Data Cleansing</button>
                <div id="cleanResult" style="display:none; padding: 15px; background: #d1ecf1; border-radius: 8px; margin-top: 15px;">
                    <strong>✅ Data Cleansing Complete!</strong>
                    <p>All issues resolved. Data quality improved from 72% to 96%.</p>
                </div>
            </div>
        `
    },
    {
        id: 15,
        term: "Generative AI (GenAI)",
        definition: "Type of AI that can generate new content like text, images, and videos.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎨 Generative AI Demo</div>
                <p>Generate content based on data insights:</p>
                <div style="margin: 15px 0;">
                    <select id="genType" style="padding: 8px; border-radius: 4px; width: 100%;">
                        <option value="report">Sales Report</option>
                        <option value="summary">Executive Summary</option>
                        <option value="visualization">Data Visualization</option>
                        <option value="insights">Key Insights</option>
                    </select>
                </div>
                <div style="margin: 15px 0;">
                    <textarea id="genInput" placeholder="Enter data points or context..." style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid #ddd; height: 80px;"></textarea>
                </div>
                <button onclick="generateContent()" class="control-btn">Generate Content</button>
                <div id="genOutput" style="display:none; padding: 15px; background: #e8f4f8; border-radius: 8px; margin-top: 15px;">
                    <strong>Generated Content:</strong>
                    <p id="generatedText"></p>
                </div>
            </div>
        `
    },
    {
        id: 16,
        term: "Large Language Models (LLMs)",
        definition: "Deep learning models trained on massive amounts of text data.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">📚 LLM Capabilities Demo</div>
                <div class="chat-interface">
                    <div class="chat-messages" id="llmMessages">
                        <div class="message ai-message">
                            <strong>LLM:</strong> I'm a large language model. I can help with text analysis, summarization, and more!
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <select id="llmTask" style="padding: 8px; border-radius: 4px; width: 100%; margin-bottom: 10px;">
                            <option value="summarize">Summarize Text</option>
                            <option value="analyze">Analyze Sentiment</option>
                            <option value="extract">Extract Key Points</option>
                            <option value="translate">Translate</option>
                        </select>
                        <input type="text" class="chat-input" id="llmInput" placeholder="Enter text or ask a question...">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 17,
        term: "Natural Language Querying",
        definition: "A capability in BI software that enables users to ask questions of data in natural language.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🗣️ Natural Language to SQL</div>
                <p>Type a question, see the SQL query generated:</p>
                <div style="margin: 15px 0;">
                    <input type="text" id="nlqInput" placeholder="e.g., Show me sales by region last month" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid #ddd;">
                </div>
                <button onclick="generateSQL()" class="control-btn">Generate SQL</button>
                <div id="sqlOutput" style="display:none; padding: 15px; background: #2c3e50; color: white; border-radius: 8px; margin-top: 15px; font-family: monospace;">
                    <strong>Generated SQL:</strong>
                    <pre id="sqlCode"></pre>
                </div>
            </div>
        `
    },
    {
        id: 18,
        term: "Power BI",
        definition: "BI tool developed by Microsoft that helps transform raw data into meaningful insights.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">💼 Power BI Dashboard Simulator</div>
                <p>Interactive dashboard with Power BI-like features:</p>
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 15px; margin: 15px 0;">
                    <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <div style="font-size: 0.9rem; color: #666;">Sales Trend</div>
                        <div class="visualization-container">
                            <canvas id="powerBIChart"></canvas>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <div style="font-size: 0.9rem; color: #666;">Top Products</div>
                            <div style="margin-top: 10px;">
                                <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                                    <span>Laptop Pro</span>
                                    <span>$45,200</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                                    <span>Headphones</span>
                                    <span>$32,100</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                                    <span>Monitor</span>
                                    <span>$28,500</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onclick="refreshPowerBI()" class="control-btn">Refresh Data</button>
            </div>
        `
    },
    {
        id: 19,
        term: "Predictive Analytics",
        definition: "Statistical techniques used to predict future behavior and events.",
        category: "ai",
        example: `
            <div class="example-demo">
                <div class="demo-title">🔮 Sales Forecasting Demo</div>
                <p>AI predicts future sales based on historical data:</p>
                <div class="visualization-container">
                    <canvas id="predictionChart"></canvas>
                </div>
                <div style="margin: 15px 0;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span>Forecast Period:</span>
                        <select id="forecastPeriod" onchange="updateForecast()" style="padding: 5px; border-radius: 4px;">
                            <option value="3">3 months</option>
                            <option value="6" selected>6 months</option>
                            <option value="12">12 months</option>
                        </select>
                    </div>
                </div>
                <div id="predictionResult" style="padding: 15px; background: #e8f4f8; border-radius: 8px; margin-top: 15px;">
                    <strong>AI Prediction:</strong> Sales are expected to grow 15% in the next quarter.
                </div>
            </div>
        `
    },
    {
        id: 20,
        term: "Tableau",
        definition: "Visual analytics platform that transforms the way we use data to solve problems.",
        category: "tools",
        example: `
            <div class="example-demo">
                <div class="demo-title">🎨 Tableau Visualization Studio</div>
                <p>Create interactive visualizations with Tableau-like interface:</p>
                <div style="margin: 15px 0;">
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <div style="padding: 10px; background: #e3f2fd; border-radius: 8px; cursor: pointer;" onclick="addTableauViz('bar')">
                            📊 Bar Chart
                        </div>
                        <div style="padding: 10px; background: #e3f2fd; border-radius: 8px; cursor: pointer;" onclick="addTableauViz('line')">
                            📈 Line Chart
                        </div>
                        <div style="padding: 10px; background: #e3f2fd; border-radius: 8px; cursor: pointer;" onclick="addTableauViz('pie')">
                            🥧 Pie Chart
                        </div>
                    </div>
                    <div id="tableauCanvas" style="height: 200px; border: 2px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; padding: 20px;">
                        <span style="color: #666;">Drag and drop visualizations here</span>
                    </div>
                </div>
                <button onclick="exportTableau()" class="control-btn">Export Dashboard</button>
            </div>
        `
    }
];

// Global variables
let currentCharts = {};
let kafkaInterval;

// Initialize the glossary
document.addEventListener('DOMContentLoaded', function() {
    renderGlossary();
    setupEventListeners();
    initializeCharts();
});

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
            <p class="term-definition">${highlightText(term.definition)}</p>
            <div class="example-container">
                <div class="example-title">
                    <i class="fas fa-play-circle"></i>
                    Live Example Available
                </div>
                <p>Click to try an interactive demo</p>
            </div>
            <div class="term-actions">
                <button class="action-btn view-example" onclick="event.stopPropagation(); openModal(${term.id})">
                    Try Live Example
                </button>
                <button class="action-btn view-details" onclick="event.stopPropagation(); openModal(${term.id}, 'details')">
                    View Details
                </button>
            </div>
        </div>
    `).join('');
}

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

function highlightText(text) {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm || !text) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function getCategoryName(category) {
    const categories = {
        'ai': 'AI Concepts',
        'tools': 'AI Tools',
        'bias': 'Bias & Ethics',
        'data': 'Data Management',
        'viz': 'Visualization'
    };
    return categories[category] || category;
}

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
}

function openModal(termId, view = 'example') {
    const term = glossaryData.find(t => t.id === termId);
    if (!term) return;
    
    document.getElementById('modalContent').innerHTML = `
        <h2 class="modal-term-title">${term.term}</h2>
        <span class="modal-term-category">${getCategoryName(term.category)}</span>
        
        <div class="modal-section">
            <h3>Definition</h3>
            <p>${term.definition}</p>
        </div>
        
        <div class="modal-section">
            <h3>Live Example</h3>
            ${term.example}
        </div>
        
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
    
    // Initialize example-specific functionality
    initializeExample(term);
}

function getRelatedTerms(term) {
    return glossaryData
        .filter(t => t.category === term.category && t.id !== term.id)
        .slice(0, 3);
}

function closeModal() {
    document.getElementById('termModal').style.display = 'none';
    
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

function initializeCharts() {
    // Pre-initialize chart data
    window.chartData = {
        anomaly: {
            labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'],
            data: [120, 135, 118, 125, 130, 5420, 131]
        },
        features: {
            labels: ['Tenure', 'Monthly Charges', 'Contract Type', 'Support Calls', 'Payment Method'],
            data: [85, 78, 62, 45, 28]
        },
        prediction: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            data: [100, 120, 115, 130, 125, 140, 150, 155, 160]
        },
        powerBI: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            data: [85000, 92000, 105000, 124000]
        }
    };
}

function initializeExample(term) {
    // Set up example-specific functionality based on term
    switch(term.id) {
        case 4: // Anomaly Detection
            createAnomalyChart();
            break;
        case 8: // Automated Learning
            createFeatureChart();
            break;
        case 18: // Power BI
            createPowerBIChart();
            break;
        case 19: // Predictive Analytics
            createPredictionChart();
            break;
    }
    
    // Initialize chat examples
    if (term.id === 6 || term.id === 11 || term.id === 16) {
        initializeChat(term.id);
    }
}

// ========== EXAMPLE FUNCTIONS ==========

// Akkio Demo
function runAkkioDemo() {
    document.getElementById('akkioResult').style.display = 'block';
    setTimeout(() => {
        alert('✅ AI Model deployed successfully! Ready for predictions.');
    }, 500);
}

// Algorithmic Bias Demo
function detectBias() {
    document.getElementById('biasResult').style.display = 'block';
}

// Alteryx Demo
function runAlteryxWorkflow() {
    document.getElementById('alteryxResult').style.display = 'block';
}

// Anomaly Detection Chart
function createAnomalyChart() {
    const ctx = document.getElementById('anomalyChart');
    if (!ctx) return;
    
    const data = window.chartData.anomaly;
    
    currentCharts.anomaly = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Transaction Amount',
                data: data.data,
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.1
            }, {
                label: 'Normal Threshold',
                data: new Array(data.labels.length).fill(500),
                borderColor: '#e74c3c',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function addAnomaly() {
    const labels = window.chartData.anomaly.labels;
    const data = window.chartData.anomaly.data;
    
    // Add new data point
    const times = ['4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
    const newTime = times[labels.length % times.length];
    const newValue = Math.random() > 0.7 ? Math.floor(Math.random() * 5000) + 1000 : Math.floor(Math.random() * 100) + 100;
    
    labels.push(newTime);
    data.push(newValue);
    
    // Keep only last 10 points
    if (labels.length > 10) {
        labels.shift();
        data.shift();
    }
    
    // Update chart
    if (currentCharts.anomaly) {
        currentCharts.anomaly.data.labels = labels;
        currentCharts.anomaly.data.datasets[0].data = data;
        currentCharts.anomaly.update();
    }
    
    // Show alert for anomalies
    if (newValue > 1000) {
        document.getElementById('anomalyAlert').style.display = 'block';
        setTimeout(() => {
            document.getElementById('anomalyAlert').style.display = 'none';
        }, 3000);
    }
}

function resetAnomalyChart() {
    window.chartData.anomaly = {
        labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'],
        data: [120, 135, 118, 125, 130, 5420, 131]
    };
    createAnomalyChart();
    document.getElementById('anomalyAlert').style.display = 'none';
}

// Kafka Demo
function startKafkaStream() {
    let clickCount = 0;
    let sensorCount = 0;
    let appCount = 0;
    
    kafkaInterval = setInterval(() => {
        clickCount += Math.floor(Math.random() * 5) + 1;
        sensorCount += Math.floor(Math.random() * 3) + 1;
        appCount += Math.floor(Math.random() * 4) + 1;
        
        document.getElementById('clickCount').textContent = clickCount;
        document.getElementById('sensorCount').textContent = sensorCount;
        document.getElementById('appCount').textContent = appCount;
    }, 500);
}

function stopKafkaStream() {
    if (kafkaInterval) {
        clearInterval(kafkaInterval);
        kafkaInterval = null;
    }
}

// Ask Data Chat
function initializeChat(termId) {
    const inputId = termId === 6 ? 'askDataInput' : termId === 11 ? 'chatGPTInput' : 'llmInput';
    const messagesId = termId === 6 ? 'askDataMessages' : termId === 11 ? 'chatGPTMessages' : 'llmMessages';
    
    const input = document.getElementById(inputId);
    const messages = document.getElementById(messagesId);
    
    if (input && messages) {
        input.addEventListener('keypress', function(e) {
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
                    
                    let response = '';
                    if (question.toLowerCase().includes('sale') || question.toLowerCase().includes('revenue')) {
                        response = "Based on your sales data, revenue increased by 15% last quarter. The top product was Premium Laptop Pro with $45,200 in sales.";
                    } else if (question.toLowerCase().includes('region') || question.toLowerCase().includes('area')) {
                        response = "Regional performance: West ($124K), East ($98K), Central ($85K), South ($72K).";
                    } else if (question.toLowerCase().includes('customer') || question.toLowerCase().includes('client')) {
                        response = "Customer analytics: 2,458 total customers, 15% growth rate, average lifetime value $1,245.";
                    } else if (termId === 16 && document.getElementById('llmTask').value === 'summarize') {
                        response = "Summary: This text discusses the importance of data-driven decision making in modern business environments.";
                    } else {
                        response = "I can help analyze sales data, customer behavior, product performance, and regional trends. Could you be more specific?";
                    }
                    
                    aiMsg.innerHTML = `<strong>${termId === 6 ? 'Ask Data' : termId === 11 ? 'ChatGPT' : 'LLM'}:</strong> ${response}`;
                    messages.appendChild(aiMsg);
                    
                    // Scroll to bottom
                    messages.scrollTop = messages.scrollHeight;
                }, 800);
            }
        });
    }
}

// Dashboard refresh
function refreshDashboard() {
    alert('📊 Dashboard refreshed with latest data!');
}

// Automated Learning Chart
function createFeatureChart() {
    const ctx = document.getElementById('featureChart');
    if (!ctx) return;
    
    const data = window.chartData.features;
    
    currentCharts.features = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Feature Importance',
                data: data.data,
                backgroundColor: [
                    '#3498db', '#2ecc71', '#9b59b6', '#f39c12', '#e74c3c'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function analyzeFeatures() {
    // Simulate analyzing new features
    const newData = window.chartData.features.data.map(value => 
        Math.min(100, value + Math.floor(Math.random() * 20) - 10)
    );
    window.chartData.features.data = newData;
    
    if (currentCharts.features) {
        currentCharts.features.data.datasets[0].data = newData;
        currentCharts.features.update();
    }
    
    alert('🔍 New features analyzed! Updated importance scores calculated.');
}

// Chart Recommendations
function recommendChart() {
    const select = document.getElementById('dataTypeSelect');
    const recommendation = document.getElementById('chartRecommendation');
    const recommendedChart = document.getElementById('recommendedChart');
    const preview = document.getElementById('chartPreview');
    
    if (!select.value) {
        recommendation.style.display = 'none';
        preview.innerHTML = '';
        return;
    }
    
    const recommendations = {
        'timeseries': { chart: 'Line Chart', reason: 'Best for showing trends over time', emoji: '📈' },
        'categories': { chart: 'Bar Chart', reason: 'Ideal for comparing different categories', emoji: '📊' },
        'distribution': { chart: 'Histogram', reason: 'Shows data distribution patterns', emoji: '📋' },
        'geographic': { chart: 'Map Chart', reason: 'Perfect for location-based data', emoji: '🗺️' }
    };
    
    const rec = recommendations[select.value];
    recommendedChart.textContent = `${rec.emoji} ${rec.chart} - ${rec.reason}`;
    recommendation.style.display = 'block';
    
    // Show preview
    preview.innerHTML = `
        <div style="text-align: center; padding: 20px; background: white; border-radius: 8px; margin-top: 10px;">
            <div style="font-size: 2rem;">${rec.emoji}</div>
            <div style="font-weight: bold;">${rec.chart}</div>
            <div style="color: #666; font-size: 0.9rem;">${rec.reason}</div>
        </div>
    `;
}

// BI Lifecycle
function showBIStage(stage) {
    const stages = {
        1: 'Collecting data from databases, APIs, and external sources.',
        2: 'Cleaning, transforming, and preparing data for analysis.',
        3: 'Applying statistical methods and machine learning algorithms.',
        4: 'Creating charts, graphs, and interactive dashboards.',
        5: 'Making data-driven decisions based on insights.'
    };
    
    document.getElementById('stageText').textContent = stages[stage];
    document.getElementById('biStageDetail').style.display = 'block';
}

// Confirmation Bias
function showBiasedView() {
    document.getElementById('analysisText').textContent = 'The feature is successful! 60% adoption rate shows strong user engagement.';
    document.getElementById('biasAnalysis').style.display = 'block';
}

function showCompleteView() {
    document.getElementById('analysisText').textContent = 'While 60% tried the feature, 40% abandonment suggests usability issues. Further investigation needed.';
    document.getElementById('biasAnalysis').style.display = 'block';
}

// Data Cleansing
function cleanData() {
    document.getElementById('missingCount').textContent = '0 issues';
    document.getElementById('missingCount').style.background = '#27ae60';
    
    document.getElementById('duplicateCount').textContent = '0 issues';
    document.getElementById('duplicateCount').style.background = '#27ae60';
    
    document.getElementById('formatCount').textContent = '0 issues';
    document.getElementById('formatCount').style.background = '#27ae60';
    
    document.getElementById('cleanResult').style.display = 'block';
}

// Generative AI
function generateContent() {
    const type = document.getElementById('genType').value;
    const input = document.getElementById('genInput').value;
    
    const examples = {
        'report': `Based on ${input || 'the provided data'}, our analysis shows strong performance in Q3 with 15% growth overall. Key drivers include new product launches and improved customer retention.`,
        'summary': `Executive Summary: ${input || 'The data'} indicates positive trends with room for optimization in customer acquisition channels.`,
        'visualization': `I recommend a combination of line charts for trends and bar charts for category comparisons to best visualize ${input || 'this data'}.`,
        'insights': `Key Insights: 1) Customer retention improved by 8% 2) West region outperformed others 3) Product A shows highest growth potential`
    };
    
    document.getElementById('generatedText').textContent = examples[type];
    document.getElementById('genOutput').style.display = 'block';
}

// Clustering
function updateCluster() {
    const freq = parseInt(document.getElementById('freqSlider').value);
    const value = parseInt(document.getElementById('valueSlider').value);
    
    document.getElementById('freqValue').textContent = freq;
    document.getElementById('valueValue').textContent = value;
    
    // Calculate cluster
    let cluster = '';
    let color = '#3498db';
    
    if (freq > 20 && value > 300) {
        cluster = '💎 Loyal Advocates';
        color = '#9b59b6';
    } else if (freq > 15 && value > 200) {
        cluster = '⭐ Premium Customers';
        color = '#2ecc71';
    } else if (freq > 10 && value > 100) {
        cluster = '💰 Value Seekers';
        color = '#f39c12';
    } else {
        cluster = '🛍️ Occasional Shoppers';
        color = '#3498db';
    }
    
    const result = document.getElementById('clusterResult');
    result.textContent = cluster;
    result.style.background = color + '20';
    result.style.border = `2px solid ${color}`;
    result.style.color = color;
}

function resetClustering() {
    document.getElementById('freqSlider').value = 12;
    document.getElementById('valueSlider').value = 120;
    updateCluster();
}

// Natural Language to SQL
function generateSQL() {
    const input = document.getElementById('nlqInput').value.toLowerCase();
    let sql = '';
    
    if (input.includes('sale') && input.includes('region')) {
        sql = `SELECT region, SUM(amount) as total_sales\nFROM sales\nWHERE date >= DATEADD(month, -1, GETDATE())\nGROUP BY region\nORDER BY total_sales DESC;`;
    } else if (input.includes('customer') && input.includes('spent')) {
        sql = `SELECT customer_id, first_name, last_name, SUM(order_total) as total_spent\nFROM customers\nJOIN orders ON customers.id = orders.customer_id\nWHERE order_date >= '2023-10-01'\nGROUP BY customer_id, first_name, last_name\nHAVING SUM(order_total) > 1000\nORDER BY total_spent DESC;`;
    } else if (input.includes('product') && input.includes('performance')) {
        sql = `SELECT product_name, COUNT(*) as units_sold, SUM(revenue) as total_revenue\nFROM products\nJOIN sales ON products.id = sales.product_id\nWHERE sale_date >= DATEADD(month, -3, GETDATE())\nGROUP BY product_name\nORDER BY total_revenue DESC\nLIMIT 10;`;
    } else {
        sql = `-- AI Generated SQL Query\nSELECT *\nFROM your_table\nWHERE conditions\nORDER BY relevant_column\nLIMIT 100;`;
    }
    
    document.getElementById('sqlCode').textContent = sql;
    document.getElementById('sqlOutput').style.display = 'block';
}

// Power BI Chart
function createPowerBIChart() {
    const ctx = document.getElementById('powerBIChart');
    if (!ctx) return;
    
    const data = window.chartData.powerBI;
    
    currentCharts.powerBI = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Quarterly Revenue',
                data: data.data,
                backgroundColor: '#3498db',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function refreshPowerBI() {
    // Update with new random data
    const newData = window.chartData.powerBI.data.map(value => 
        value + Math.floor(Math.random() * 10000) - 5000
    );
    window.chartData.powerBI.data = newData;
    
    if (currentCharts.powerBI) {
        currentCharts.powerBI.data.datasets[0].data = newData;
        currentCharts.powerBI.update();
    }
    
    alert('🔄 Power BI dashboard refreshed with latest data!');
}

// Prediction Chart
function createPredictionChart() {
    const ctx = document.getElementById('predictionChart');
    if (!ctx) return;
    
    const data = window.chartData.prediction;
    const historical = data.data.slice(0, 6);
    const predicted = [null, null, null, null, null, null, ...data.data.slice(6)];
    
    currentCharts.prediction = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Historical Sales',
                data: historical,
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2,
                fill: true
            }, {
                label: 'AI Prediction',
                data: predicted,
                borderColor: '#2ecc71',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateForecast() {
    const period = parseInt(document.getElementById('forecastPeriod').value);
    const result = document.getElementById('predictionResult');
    
    const predictions = {
        3: 'Sales are expected to grow 8% in the next 3 months.',
        6: 'Sales are expected to grow 15% in the next 6 months.',
        12: 'Sales are expected to grow 22% in the next 12 months.'
    };
    
    result.textContent = `AI Prediction: ${predictions[period]}`;
}

// Tableau
function addTableauViz(type) {
    const canvas = document.getElementById('tableauCanvas');
    const emojis = { bar: '📊', line: '📈', pie: '🥧' };
    
    canvas.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 3rem;">${emojis[type]}</div>
            <div style="font-weight: bold; margin-top: 10px;">${type.charAt(0).toUpperCase() + type.slice(1)} Chart Created</div>
            <div style="color: #666; margin-top: 5px;">Drag to reposition, use handles to resize</div>
        </div>
    `;
}

function exportTableau() {
    alert('📤 Tableau dashboard exported successfully! Ready for sharing.');
}