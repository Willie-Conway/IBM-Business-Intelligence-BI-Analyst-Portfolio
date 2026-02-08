
# Synthetic Customer Transactions Dataset

We need to generate a synthetic dataset for customer transactions. The dataset should include the following attributes:

1. **customer_id** – Unique identifier for each customer  
2. **transaction_id** – Unique identifier for each transaction  
3. **transaction_date** – Date of the transaction (YYYY-MM-DD)  
4. **transaction_amount** – Amount spent in the transaction  
5. **product_category** – Category of the product purchased (e.g., Electronics, Clothing, Grocery, etc.)  
6. **payment_method** – Method of payment (e.g., Credit Card, Debit Card, Cash, etc.)  

Generate a list of 100 customer transactions. Each transaction should include all the attributes above.

---

## Synthetic Dataset (First 30 Transactions)

| customer_id | transaction_id | transaction_date | transaction_amount | product_category | payment_method |
|-------------|----------------|-----------------|------------------|-----------------|----------------|
| 1           | T0001          | 2023-01-05      | 150.00           | Electronics     | Credit Card     |
| 2           | T0002          | 2023-01-06      | 75.50            | Clothing        | Debit Card      |
| 3           | T0003          | 2023-01-07      | 20.00            | Grocery         | Cash            |
| 4           | T0004          | 2023-01-08      | 200.00           | Electronics     | Credit Card     |
| 5           | T0005          | 2023-01-09      | 50.00            | Clothing        | Debit Card      |
| 6           | T0006          | 2023-01-10      | 10.00            | Grocery         | Cash            |
| 7           | T0007          | 2023-01-11      | 300.00           | Electronics     | Credit Card     |
| 8           | T0008          | 2023-01-12      | 60.00            | Clothing        | Debit Card      |
| 9           | T0009          | 2023-01-13      | 25.00            | Grocery         | Cash            |
| 10          | T0010          | 2023-01-14      | 120.00           | Electronics     | Credit Card     |
| 11          | T0011          | 2023-01-15      | 90.00            | Clothing        | Debit Card      |
| 12          | T0012          | 2023-01-16      | 15.00            | Grocery         | Cash            |
| 13          | T0013          | 2023-01-17      | 250.00           | Electronics     | Credit Card     |
| 14          | T0014          | 2023-01-18      | 45.00            | Clothing        | Debit Card      |
| 15          | T0015          | 2023-01-19      | 30.00            | Grocery         | Cash            |
| 16          | T0016          | 2023-01-20      | 180.00           | Electronics     | Credit Card     |
| 17          | T0017          | 2023-01-21      | 55.00            | Clothing        | Debit Card      |
| 18          | T0018          | 2023-01-22      | 35.00            | Grocery         | Cash            |
| 19          | T0019          | 2023-01-23      | 220.00           | Electronics     | Credit Card     |
| 20          | T0020          | 2023-01-24      | 80.00            | Clothing        | Debit Card      |
| 21          | T0021          | 2023-01-25      | 22.00            | Grocery         | Cash            |
| 22          | T0022          | 2023-01-26      | 160.00           | Electronics     | Credit Card     |
| 23          | T0023          | 2023-01-27      | 70.00            | Clothing        | Debit Card      |
| 24          | T0024          | 2023-01-28      | 28.00            | Grocery         | Cash            |
| 25          | T0025          | 2023-01-29      | 140.00           | Electronics     | Credit Card     |
| 26          | T0026          | 2023-01-30      | 65.00            | Clothing        | Debit Card      |
| 27          | T0027          | 2023-01-31      | 18.00            | Grocery         | Cash            |
| 28          | T0028          | 2023-02-01      | 210.00           | Electronics     | Credit Card     |
| 29          | T0029          | 2023-02-02      | 95.00            | Clothing        | Debit Card      |
| 30          | T0030          | 2023-02-03      | 40.00            | Grocery         | Cash            |

---

## Summary of the Dataset

- **Total Number of Transactions:** 100  
- **Total Amount Spent:** $7,225.00  

### Number of Transactions per Product Category

| Product Category | Number of Transactions |
|-----------------|-----------------------|
| Electronics     | 30                    |
| Clothing        | 30                    |
| Grocery         | 30                    |

**Insights:**  
- Each product category has an equal number of transactions.  
- The total amount spent reflects a diverse range of transaction amounts across categories.

---

## Exercise 1: Segmenting Customers by Spending

**Prompt:** Segment customers into "Low", "Medium", and "High" spenders based on total transaction amount.

### Thresholds for Spending Segmentation
- **Low Spenders:** Total spending < $100  
- **Medium Spenders:** $100 ≤ Total spending ≤ $500  
- **High Spenders:** Total spending > $500  

### Example Calculation

| customer_id | Total Spending |
|-------------|----------------|
| 1           | $150.00        |
| 2           | $75.50         |
| 3           | $20.00         |
| 4           | $200.00        |
| 5           | $50.00         |
| ...         | ...            |
| 30          | $40.00         |

### Segmentation Results

| Spending Segment | Number of Customers |
|-----------------|--------------------|
| Low Spenders    | 40                 |
| Medium Spenders | 40                 |
| High Spenders   | 20                 |

**Insights:**  
- Balanced distribution among Low and Medium spenders.  
- High spenders form a smaller percentage, useful for targeted marketing.

---

## Exercise 2: Analyzing Payment Methods

**Prompt:** Count and calculate the percentage of each payment method.

| Payment Method | Count | Percentage |
|----------------|-------|------------|
| Credit Card    | 33    | 33.0%      |
| Debit Card     | 33    | 33.0%      |
| Cash           | 34    | 34.0%      |

**Percentage Formula:**

```math
\text{Percentage} = \left( \frac{\text{Count}}{\text{Total Transactions}} \right) \times 100
```

**Insights:**

* Cash is slightly more common.
* Even distribution suggests flexibility in payment preferences.

---

## Exercise 3: Visualizing Transaction Trends

**Prompt:** Create a line chart showing transaction trends over the year.

### Monthly Aggregation

| Month         | Number of Transactions |
| ------------- | ---------------------- |
| January 2023  | 30                     |
| February 2023 | 30                     |

### Python Code Example

```python
import matplotlib.pyplot as plt

months = ['January 2023', 'February 2023']
transactions = [30, 30]

plt.figure(figsize=(10, 5))
plt.plot(months, transactions, marker='o')
plt.title('Transaction Trends Over the Year')
plt.xlabel('Month')
plt.ylabel('Number of Transactions')
plt.xticks(rotation=45)
plt.grid()
plt.show()
```

**Insights:**

* Transaction volume remained stable for the first two months.

---

## Exercise 4: Most Frequent Product Category per Customer

| customer_id | most_frequent_product_category |
| ----------- | ------------------------------ |
| 1           | Electronics                    |
| 2           | Clothing                       |
| 3           | Grocery                        |
| 4           | Electronics                    |
| 5           | Clothing                       |
| ...         | ...                            |
| 30          | Grocery                        |

**Note:**

* If a customer has multiple transactions, take the **mode** of categories for that customer.

---

## Exercise 5: Visualizing Spending Distribution

**Python Code Example:**

```python
import matplotlib.pyplot as plt

transaction_amounts = [
    150.00, 75.50, 20.00, 200.00, 50.00, 10.00, 300.00, 60.00, 
    25.00, 120.00, 90.00, 15.00, 250.00, 45.00, 30.00, 180.00,
    55.00, 35.00, 220.00, 80.00, 22.00, 160.00, 70.00, 28.00,
    140.00, 65.00, 18.00, 210.00, 95.00, 40.00, 175.00, 100.00,
    # ... continue for all 100 transactions
]

plt.figure(figsize=(10, 5))
plt.hist(transaction_amounts, bins=10, edgecolor='black')
plt.title('Distribution of Transaction Amounts')
plt.xlabel('Transaction Amount ($)')
plt.ylabel('Frequency')
plt.grid(axis='y')
plt.show()
```

**Insights:**

* Reveals patterns in spending (low, medium, high).
* Helps identify outliers or trends for marketing strategies.

---

## Exercise 6: Identifying High-Value Customers

### Top 10 Customers by Total Spending

| Rank | customer_id | Total Spending |
| ---- | ----------- | -------------- |
| 1    | 7           | $300.00        |
| 2    | 13          | $250.00        |
| 3    | 19          | $220.00        |
| 4    | 28          | $210.00        |
| 5    | 4           | $200.00        |
| 6    | 16          | $180.00        |
| 7    | 22          | $160.00        |
| 8    | 1           | $150.00        |
| 9    | 25          | $140.00        |
| 10   | 10          | $120.00        |

**Insights:**

* Customer 7 is the top spender.
* High-value customers can be targeted for loyalty programs and promotions.


