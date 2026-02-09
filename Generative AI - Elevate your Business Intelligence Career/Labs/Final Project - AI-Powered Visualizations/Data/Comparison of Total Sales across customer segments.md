

## **Comparison of Total Sales Across Customer Segments**

To evaluate which customer segments are most valuable to the business, total sales were aggregated by **customer segment** and visualized using a **bar chart**.

### **Customer Segments Analyzed**

* Consumer
* Corporate
* Home Office

```python
import pandas as pd
import matplotlib.pyplot as plt

# Load dataset
df = pd.read_csv("train.csv")

# Aggregate total sales by customer segment
segment_sales = df.groupby("Segment")["Sales"].sum()

# Create bar chart
plt.figure()
segment_sales.plot(kind="bar")
plt.title("Total Sales by Customer Segment")
plt.xlabel("Customer Segment")
plt.ylabel("Total Sales")
plt.xticks(rotation=0)
plt.show()
```


---

## **Key Insights from the Visualization**

* The **Consumer segment** generates the highest total sales, making it the most valuable segment in terms of revenue.
* The **Corporate segment** ranks second, contributing a substantial share of total sales and representing stable, high-value business customers.
* The **Home Office segment** contributes the lowest total sales, though it still represents a meaningful portion of the customer base.

---

## **Business Interpretation**

The results indicate that individual consumers drive the majority of revenue, while corporate customers provide strong secondary support. Home Office customers, although smaller in volume, may offer growth opportunities through targeted offerings or bundled solutions.

---

## **How This Guides Business Decisions**

This insight can be used to:

* Prioritize **marketing and promotional efforts** toward the Consumer segment
* Develop **retention and loyalty programs** for Corporate customers
* Explore **upselling and cross-selling strategies** for Home Office customers
* Support **segment-specific pricing and discount strategies**

---

## **Why a Bar Chart Was Chosen**

A bar chart clearly displays differences in total sales across categories, making it easy to compare the relative value of each customer segment at a glance.


