

## **Sales Distribution by Region – Key Insight Summary**

The pie chart visualizing the **proportion of total sales by region** highlights clear differences in geographic performance:

* The **West region** contributes the largest share of total sales, making it the strongest revenue-generating region.
* The **East region** follows closely, indicating another well-established and profitable market.
* The **Central and South regions** account for smaller portions of total sales, suggesting comparatively lower performance.

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('/mnt/data/train.csv')

region_sales = df.groupby('Region')['Sales'].sum()

plt.figure()
region_sales.plot(kind='pie', autopct='%1.1f%%')
plt.title('Proportion of Total Sales by Region')
plt.ylabel('')
plt.show()
```

---

## **Business Interpretation**

This visualization shows that sales are **not evenly distributed geographically**. A significant portion of revenue comes from just two regions, which has important strategic implications.

---

## **How This Guides Further Analysis**

These insights can be used to:

* Investigate **why West and East regions perform better** (customer mix, product preferences, pricing, logistics)
* Analyze **profit margins by region**, not just total sales
* Identify **growth opportunities** in underperforming regions through targeted marketing or operational improvements
* Support **resource allocation decisions**, such as staffing, inventory placement, and regional campaigns


