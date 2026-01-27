-- E-COMMERCE DATABASE FOR SQL PRACTICE
-- Total: ~20,000+ records across 7 tables

-- Drop database if exists and create fresh
DROP DATABASE IF EXISTS ecommerce_practice;
CREATE DATABASE ecommerce_practice;
USE ecommerce_practice;

-- 1. CUSTOMERS TABLE (1000 records)
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(200),
    city VARCHAR(50),
    state VARCHAR(50),
    zip_code VARCHAR(20),
    country VARCHAR(50),
    registration_date DATE,
    total_spent DECIMAL(10,2),
    loyalty_points INT
);

-- 2. SUPPLIERS TABLE (100 records)
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(100),
    contact_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(200),
    city VARCHAR(50),
    country VARCHAR(50),
    rating DECIMAL(3,2),
    contract_start DATE,
    contract_end DATE
);

-- 3. PRODUCTS TABLE (500 records)
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    category VARCHAR(50),
    subcategory VARCHAR(50),
    brand VARCHAR(50),
    price DECIMAL(10,2),
    cost DECIMAL(10,2),
    stock_quantity INT,
    supplier_id INT,
    added_date DATE,
    is_active BOOLEAN,
    rating DECIMAL(3,2),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);

-- 4. ORDERS TABLE (5000 records)
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    order_date DATETIME,
    status VARCHAR(20),
    shipping_address VARCHAR(200),
    billing_address VARCHAR(200),
    subtotal DECIMAL(10,2),
    tax DECIMAL(10,2),
    shipping_cost DECIMAL(10,2),
    total_amount DECIMAL(10,2),
    payment_method VARCHAR(50),
    shipping_method VARCHAR(50),
    estimated_delivery DATE,
    actual_delivery DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- 5. ORDER_ITEMS TABLE (15000 records)
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT,
    unit_price DECIMAL(10,2),
    discount DECIMAL(10,2),
    total_price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- 6. EMPLOYEES TABLE (50 records)
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    hire_date DATE,
    job_title VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    manager_id INT,
    address VARCHAR(200)
);

-- 7. REVIEWS TABLE (3000 records)
CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    customer_id INT,
    rating INT,
    review_text TEXT,
    review_date DATE,
    helpful_votes INT,
    verified_purchase BOOLEAN,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- ==================== INSERT FAKE DATA ====================

-- Insert 1000 customers (FIXED: removed customer_id from column list)
INSERT INTO customers (first_name, last_name, email, phone, address, city, state, zip_code, country, registration_date, total_spent, loyalty_points)
WITH RECURSIVE cte AS (
    SELECT 1 AS n,
           ELT(FLOOR(1 + RAND() * 20), 'John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Robert', 'Lisa', 'William', 'Maria', 'James', 'Patricia', 'Richard', 'Jennifer', 'Charles', 'Linda', 'Thomas', 'Elizabeth', 'Daniel', 'Susan') AS first_name,
           ELT(FLOOR(1 + RAND() * 20), 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin') AS last_name
    UNION ALL
    SELECT n + 1,
           ELT(FLOOR(1 + RAND() * 20), 'John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Robert', 'Lisa', 'William', 'Maria', 'James', 'Patricia', 'Richard', 'Jennifer', 'Charles', 'Linda', 'Thomas', 'Elizabeth', 'Daniel', 'Susan'),
           ELT(FLOOR(1 + RAND() * 20), 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin')
    FROM cte WHERE n < 1000
)
SELECT 
    first_name,
    last_name,
    CONCAT(LOWER(first_name), '.', LOWER(last_name), n, '@email.com'),
    CONCAT('+1-', LPAD(FLOOR(RAND() * 900) + 100, 3, '0'), '-', LPAD(FLOOR(RAND() * 900) + 100, 3, '0'), '-', LPAD(FLOOR(RAND() * 9000) + 1000, 4, '0')),
    CONCAT(FLOOR(RAND() * 9999) + 1, ' ', ELT(FLOOR(1 + RAND() * 10), 'Main', 'Oak', 'Maple', 'Pine', 'Cedar', 'Elm', 'Washington', 'Lake', 'Hill', 'Park'), ' St.'),
    ELT(FLOOR(1 + RAND() * 20), 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Boston'),
    ELT(FLOOR(1 + RAND() * 50), 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'),
    LPAD(FLOOR(RAND() * 99999), 5, '0'),
    'USA',
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365*3) DAY),
    ROUND(RAND() * 5000, 2),
    FLOOR(RAND() * 1000)
FROM cte;

-- Insert 100 suppliers
INSERT INTO suppliers (supplier_name, contact_name, email, phone, address, city, country, rating, contract_start, contract_end)
WITH RECURSIVE cte AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1 FROM cte WHERE n < 100
)
SELECT 
    CONCAT(ELT(FLOOR(1 + RAND() * 10), 'Global', 'Premium', 'Quality', 'Best', 'Top', 'First', 'Prime', 'Super', 'Mega', 'Ultra'), ' ',
           ELT(FLOOR(1 + RAND() * 10), 'Tech', 'Goods', 'Supplies', 'Products', 'Manufacturing', 'Industries', 'Corp', 'Enterprises', 'Solutions', 'Distributors')),
    CONCAT(ELT(FLOOR(1 + RAND() * 20), 'John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Robert', 'Lisa', 'William', 'Maria', 'James', 'Patricia', 'Richard', 'Jennifer', 'Charles', 'Linda', 'Thomas', 'Elizabeth', 'Daniel', 'Susan'), ' ',
           ELT(FLOOR(1 + RAND() * 20), 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin')),
    CONCAT('contact', n, '@supplier.com'),
    CONCAT('+1-', LPAD(FLOOR(RAND() * 900) + 100, 3, '0'), '-', LPAD(FLOOR(RAND() * 900) + 100, 3, '0'), '-', LPAD(FLOOR(RAND() * 9000) + 1000, 4, '0')),
    CONCAT(FLOOR(RAND() * 9999) + 1, ' ', ELT(FLOOR(1 + RAND() * 10), 'Industrial', 'Business', 'Commerce', 'Trade', 'Market', 'Center', 'Park', 'Plaza', 'Square', 'Court')),
    ELT(FLOOR(1 + RAND() * 20), 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Boston'),
    ELT(FLOOR(1 + RAND() * 10), 'USA', 'Canada', 'Mexico', 'China', 'Japan', 'Germany', 'UK', 'France', 'Italy', 'South Korea'),
    ROUND(3 + RAND() * 2, 2),
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365*5) DAY),
    DATE_ADD(CURDATE(), INTERVAL FLOOR(RAND() * 365*2) DAY)
FROM cte;

-- Insert 500 products
INSERT INTO products (product_name, category, subcategory, brand, price, cost, stock_quantity, supplier_id, added_date, is_active, rating)
WITH RECURSIVE cte AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1 FROM cte WHERE n < 500
)
SELECT 
    CONCAT(ELT(FLOOR(1 + RAND() * 20), 'Premium', 'Deluxe', 'Professional', 'Standard', 'Basic', 'Advanced', 'Ultimate', 'Essential', 'Pro', 'Lite', 'Smart', 'Digital', 'Wireless', 'Bluetooth', 'USB-C', '4K', 'HD', 'LED', 'Portable', 'Rechargeable'), ' ',
           ELT(FLOOR(1 + RAND() * 5), 'Black', 'White', 'Silver', 'Gold', 'Space Gray'), ' ',
           ELT(FLOOR(1 + RAND() * 20), 'Laptop', 'Smartphone', 'Tablet', 'Monitor', 'Keyboard', 'Mouse', 'Headphones', 'Speaker', 'Charger', 'Cable', 'Adapter', 'Case', 'Stand', 'Dock', 'Router', 'Camera', 'Watch', 'Fitness Tracker', 'Smart Home', 'Gaming Console')),
    ELT(FLOOR(1 + RAND() * 5), 'Electronics', 'Home & Kitchen', 'Clothing', 'Books', 'Sports'),
    ELT(FLOOR(1 + RAND() * 5), 'Computers', 'Mobile Devices', 'Accessories', 'Audio', 'Wearables'),
    ELT(FLOOR(1 + RAND() * 10), 'Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Bose', 'JBL', 'Logitech', 'Microsoft'),
    ROUND(10 + RAND() * 990, 2),
    ROUND(5 + RAND() * 500, 2),
    FLOOR(RAND() * 1000),
    FLOOR(1 + RAND() * 100),
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365*2) DAY),
    RAND() > 0.1,
    ROUND(1 + RAND() * 4, 2)
FROM cte;

-- Insert 5000 orders
INSERT INTO orders (customer_id, order_date, status, shipping_address, billing_address, subtotal, tax, shipping_cost, total_amount, payment_method, shipping_method, estimated_delivery, actual_delivery)
WITH RECURSIVE cte AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1 FROM cte WHERE n < 5000
)
SELECT 
    FLOOR(1 + RAND() * 1000),
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365*2) DAY) + INTERVAL FLOOR(RAND() * 86400) SECOND,
    ELT(FLOOR(1 + RAND() * 6), 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned'),
    CONCAT(FLOOR(RAND() * 9999) + 1, ' ', ELT(FLOOR(1 + RAND() * 10), 'Main', 'Oak', 'Maple', 'Pine', 'Cedar', 'Elm', 'Washington', 'Lake', 'Hill', 'Park'), ' St.'),
    CONCAT(FLOOR(RAND() * 9999) + 1, ' ', ELT(FLOOR(1 + RAND() * 10), 'Main', 'Oak', 'Maple', 'Pine', 'Cedar', 'Elm', 'Washington', 'Lake', 'Hill', 'Park'), ' St.'),
    ROUND(20 + RAND() * 980, 2),
    ROUND((20 + RAND() * 980) * 0.08, 2),
    ELT(FLOOR(1 + RAND() * 4), 0, 5.99, 9.99, 19.99),
    ROUND((20 + RAND() * 980) * 1.08 + ELT(FLOOR(1 + RAND() * 4), 0, 5.99, 9.99, 19.99), 2),
    ELT(FLOOR(1 + RAND() * 5), 'Credit Card', 'Debit Card', 'PayPal', 'Apple Pay', 'Google Pay'),
    ELT(FLOOR(1 + RAND() * 4), 'Standard', 'Express', 'Overnight', 'International'),
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365*2) DAY) + INTERVAL FLOOR(3 + RAND() * 14) DAY,
    CASE WHEN RAND() > 0.3 THEN DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365*2) DAY) + INTERVAL FLOOR(3 + RAND() * 14) DAY ELSE NULL END
FROM cte;

-- Insert 15000 order items
INSERT INTO order_items (order_id, product_id, quantity, unit_price, discount, total_price)
WITH RECURSIVE cte AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1 FROM cte WHERE n < 15000
)
SELECT 
    FLOOR(1 + RAND() * 5000),
    FLOOR(1 + RAND() * 500),
    FLOOR(1 + RAND() * 5),
    ROUND(10 + RAND() * 990, 2),
    CASE WHEN RAND() > 0.7 THEN ROUND(RAND() * 20, 2) ELSE 0 END,
    ROUND((10 + RAND() * 990) * (1 - CASE WHEN RAND() > 0.7 THEN RAND() * 0.2 ELSE 0 END) * FLOOR(1 + RAND() * 5), 2)
FROM cte;

-- Insert 50 employees
INSERT INTO employees (first_name, last_name, email, phone, hire_date, job_title, department, salary, manager_id, address)
WITH RECURSIVE cte AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1 FROM cte WHERE n < 50
)
SELECT 
    ELT(FLOOR(1 + RAND() * 20), 'John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Robert', 'Lisa', 'William', 'Maria', 'James', 'Patricia', 'Richard', 'Jennifer', 'Charles', 'Linda', 'Thomas', 'Elizabeth', 'Daniel', 'Susan'),
    ELT(FLOOR(1 + RAND() * 20), 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'),
    CONCAT('emp', n, '@company.com'),
    CONCAT('+1-', LPAD(FLOOR(RAND() * 900) + 100, 3, '0'), '-', LPAD(FLOOR(RAND() * 900) + 100, 3, '0'), '-', LPAD(FLOOR(RAND() * 9000) + 1000, 4, '0')),
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365*10) DAY),
    ELT(FLOOR(1 + RAND() * 10), 'CEO', 'Manager', 'Supervisor', 'Analyst', 'Developer', 'Designer', 'Sales Rep', 'Support Agent', 'Accountant', 'Marketing Specialist'),
    ELT(FLOOR(1 + RAND() * 6), 'Executive', 'Sales', 'Marketing', 'IT', 'Support', 'Finance'),
    ROUND(30000 + RAND() * 120000, 2),
    CASE WHEN n > 5 THEN FLOOR(1 + RAND() * 5) ELSE NULL END,
    CONCAT(FLOOR(RAND() * 9999) + 1, ' ', ELT(FLOOR(1 + RAND() * 10), 'Main', 'Oak', 'Maple', 'Pine', 'Cedar', 'Elm', 'Washington', 'Lake', 'Hill', 'Park'), ' St.')
FROM cte;

-- Insert 3000 reviews
INSERT INTO reviews (product_id, customer_id, rating, review_text, review_date, helpful_votes, verified_purchase)
WITH RECURSIVE cte AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1 FROM cte WHERE n < 3000
)
SELECT 
    FLOOR(1 + RAND() * 500),
    FLOOR(1 + RAND() * 1000),
    FLOOR(1 + RAND() * 5),
    ELT(FLOOR(1 + RAND() * 5), 
        'Great product! Highly recommend.',
        'Good value for money.',
        'Average quality, could be better.',
        'Not what I expected.',
        'Excellent! Will buy again.'),
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365*2) DAY),
    FLOOR(RAND() * 100),
    RAND() > 0.5
FROM cte;

-- Update customer total_spent based on actual orders
UPDATE customers c
SET total_spent = (
    SELECT COALESCE(SUM(o.total_amount), 0)
    FROM orders o
    WHERE o.customer_id = c.customer_id
);

-- Add indexes for better performance
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_order_date ON orders(order_date);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_supplier_id ON products(supplier_id);
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_reviews_customer_id ON reviews(customer_id);

-- ==================== SAMPLE QUERIES TO TEST ====================
/*
-- 1. Basic SELECT
SELECT * FROM customers LIMIT 10;

-- 2. Aggregations
SELECT 
    category, 
    COUNT(*) as product_count,
    AVG(price) as avg_price,
    SUM(stock_quantity) as total_stock
FROM products 
GROUP BY category;

-- 3. JOIN operations
SELECT 
    o.order_id,
    c.first_name,
    c.last_name,
    o.order_date,
    o.total_amount
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
WHERE o.status = 'Delivered'
ORDER BY o.order_date DESC;

-- 4. Subqueries
SELECT 
    product_name,
    price,
    (SELECT AVG(price) FROM products WHERE category = p.category) as avg_category_price
FROM products p
WHERE price > (SELECT AVG(price) FROM products);

-- 5. Window functions
SELECT 
    customer_id,
    order_date,
    total_amount,
    AVG(total_amount) OVER(PARTITION BY customer_id) as avg_customer_order
FROM orders;

-- 6. Date functions
SELECT 
    YEAR(order_date) as order_year,
    MONTH(order_date) as order_month,
    COUNT(*) as order_count,
    SUM(total_amount) as total_revenue
FROM orders
GROUP BY YEAR(order_date), MONTH(order_date)
ORDER BY order_year, order_month;

-- 7. Complex joins
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    COUNT(DISTINCT o.order_id) as total_orders,
    SUM(o.total_amount) as lifetime_value,
    AVG(r.rating) as avg_rating_given
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN reviews r ON c.customer_id = r.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name
HAVING total_orders > 0
ORDER BY lifetime_value DESC;
*/

SELECT 'Database created successfully!' as message;
SELECT 
    (SELECT COUNT(*) FROM customers) as customers,
    (SELECT COUNT(*) FROM products) as products,
    (SELECT COUNT(*) FROM orders) as orders,
    (SELECT COUNT(*) FROM order_items) as order_items,
    (SELECT COUNT(*) FROM employees) as employees,
    (SELECT COUNT(*) FROM suppliers) as suppliers,
    (SELECT COUNT(*) FROM reviews) as reviews;



    