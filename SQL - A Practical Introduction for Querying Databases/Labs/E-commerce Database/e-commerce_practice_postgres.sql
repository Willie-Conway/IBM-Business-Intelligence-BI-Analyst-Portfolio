-- ==========================================
-- E-COMMERCE DATABASE FOR SQL PRACTICE
-- PostgreSQL 18+ | ~20,000+ records across 7 tables
-- ==========================================

-- ==========================================
-- 1. DROP & CREATE DATABASE (do from postgres DB)
-- ==========================================
-- DROP DATABASE IF EXISTS ecommerce_practice;
-- CREATE DATABASE ecommerce_practice;
-- \c ecommerce_practice

-- ==========================================
-- 2. CREATE TABLES
-- ==========================================

-- CUSTOMERS
CREATE TABLE IF NOT EXISTS customers (
    customer_id SERIAL PRIMARY KEY,
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
    total_spent NUMERIC(10,2),
    loyalty_points INT
);

-- SUPPLIERS
CREATE TABLE IF NOT EXISTS suppliers (
    supplier_id SERIAL PRIMARY KEY,
    supplier_name VARCHAR(100),
    contact_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(200),
    city VARCHAR(50),
    country VARCHAR(50),
    rating NUMERIC(3,2),
    contract_start DATE,
    contract_end DATE
);

-- PRODUCTS
CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    subcategory VARCHAR(50),
    brand VARCHAR(50),
    price NUMERIC(10,2),
    cost NUMERIC(10,2),
    stock_quantity INT,
    supplier_id INT REFERENCES suppliers(supplier_id),
    added_date DATE,
    is_active BOOLEAN,
    rating NUMERIC(3,2)
);

-- ORDERS
CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    order_date TIMESTAMP,
    status VARCHAR(20),
    shipping_address VARCHAR(200),
    billing_address VARCHAR(200),
    subtotal NUMERIC(10,2),
    tax NUMERIC(10,2),
    shipping_cost NUMERIC(10,2),
    total_amount NUMERIC(10,2),
    payment_method VARCHAR(50),
    shipping_method VARCHAR(50),
    estimated_delivery DATE,
    actual_delivery DATE
);

-- ORDER ITEMS
CREATE TABLE IF NOT EXISTS order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id),
    quantity INT,
    unit_price NUMERIC(10,2),
    discount NUMERIC(10,2),
    total_price NUMERIC(10,2)
);

-- EMPLOYEES
CREATE TABLE IF NOT EXISTS employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    hire_date DATE,
    job_title VARCHAR(50),
    department VARCHAR(50),
    salary NUMERIC(10,2),
    manager_id INT,
    address VARCHAR(200)
);

-- REVIEWS
CREATE TABLE IF NOT EXISTS reviews (
    review_id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(product_id),
    customer_id INT REFERENCES customers(customer_id),
    rating INT,
    review_text TEXT,
    review_date DATE,
    helpful_votes INT,
    verified_purchase BOOLEAN
);

-- ==========================================
-- 3. INSERT FAKE DATA
-- ==========================================

-- ---------- CUSTOMERS ----------
WITH
first_names AS (
    SELECT ARRAY[
        'John','Jane','Michael','Sarah','David','Emily','Robert','Lisa','William','Maria',
        'James','Patricia','Richard','Jennifer','Charles','Linda','Thomas','Elizabeth','Daniel','Susan'
    ] AS arr
),
last_names AS (
    SELECT ARRAY[
        'Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Rodriguez',
        'Martinez','Hernandez','Lopez','Gonzalez','Wilson','Anderson','Thomas','Taylor','Moore','Jackson','Martin'
    ] AS arr
),
streets AS (
    SELECT ARRAY['Main','Oak','Maple','Pine','Cedar','Elm','Washington','Lake','Hill','Park'] AS arr
),
cities AS (
    SELECT ARRAY[
        'New York','Los Angeles','Chicago','Houston','Phoenix','Philadelphia','San Antonio','San Diego',
        'Dallas','San Jose','Austin','Jacksonville','Fort Worth','Columbus','Charlotte','San Francisco',
        'Indianapolis','Seattle','Denver','Boston'
    ] AS arr
),
states AS (
    SELECT ARRAY[
        'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME',
        'MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA',
        'RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
    ] AS arr
)
INSERT INTO customers (first_name, last_name, email, phone, address, city, state, zip_code, country, registration_date, total_spent, loyalty_points)
SELECT
    fn.arr[ceil(random()*array_length(fn.arr,1))]::text AS first_name,
    ln.arr[ceil(random()*array_length(ln.arr,1))]::text AS last_name,
    lower(fn.arr[ceil(random()*array_length(fn.arr,1))] || '.' || ln.arr[ceil(random()*array_length(ln.arr,1))] || gs) || '@email.com' AS email,
    '+1-' || lpad(floor(random()*900+100)::int::text,3,'0') || '-' ||
           lpad(floor(random()*900+100)::int::text,3,'0') || '-' ||
           lpad(floor(random()*9000+1000)::int::text,4,'0') AS phone,
    (floor(random()*9999+1)) || ' ' || st.arr[ceil(random()*array_length(st.arr,1))] || ' St.' AS address,
    c.arr[ceil(random()*array_length(c.arr,1))] AS city,
    s.arr[ceil(random()*array_length(s.arr,1))] AS state,
    lpad(floor(random()*99999)::int::text,5,'0') AS zip_code,
    'USA' AS country,
    CURRENT_DATE - (floor(random()*365*3))::int AS registration_date,
    round((random()*5000)::numeric, 2) AS total_spent,
    floor(random()*1000)::int AS loyalty_points
FROM generate_series(1,1000) AS gs,
     first_names fn,
     last_names ln,
     streets st,
     cities c,
     states s;

-- ---------- SUPPLIERS ----------
INSERT INTO suppliers (supplier_name, contact_name, email, phone, address, city, country, rating, contract_start, contract_end)
SELECT
    'Supplier ' || gs,
    'Contact ' || gs,
    'supplier'||gs||'@email.com',
    '+1-' || lpad(floor(random()*900+100)::int::text,3,'0') || '-' || lpad(floor(random()*900+100)::int::text,3,'0') || '-' || lpad(floor(random()*9000+1000)::int::text,4,'0'),
    (floor(random()*9999+1)) || ' ' || 'Supplier St.',
    cities_arr[ceil(random()*array_length(cities_arr,1))],
    'USA',
    round((random()*5)::numeric,2),
    CURRENT_DATE - (floor(random()*365*5))::int,
    CURRENT_DATE + (floor(random()*365*5))::int
FROM generate_series(1,50) AS gs,
     (SELECT ARRAY[
         'New York','Los Angeles','Chicago','Houston','Phoenix','Philadelphia','San Antonio','San Diego',
         'Dallas','San Jose','Austin','Jacksonville','Fort Worth','Columbus','Charlotte','San Francisco',
         'Indianapolis','Seattle','Denver','Boston'
     ] AS cities_arr) c;

-- ---------- PRODUCTS ----------
INSERT INTO products (product_name, category, subcategory, brand, price, cost, stock_quantity, supplier_id, added_date, is_active, rating)
SELECT
    'Product ' || gs,
    'Category ' || (1 + floor(random()*5)::int),
    'Subcategory ' || (1 + floor(random()*10)::int),
    'Brand ' || (1 + floor(random()*20)::int),
    round((random()*500)::numeric,2),
    round((random()*300)::numeric,2),
    floor(random()*1000)::int,
    1 + floor(random()*50)::int,
    CURRENT_DATE - (floor(random()*365*3))::int,
    true,
    round((random()*5)::numeric,2)
FROM generate_series(1,500) AS gs;

-- ---------- ORDERS ----------
INSERT INTO orders (customer_id, order_date, status, shipping_address, billing_address, subtotal, tax, shipping_cost, total_amount, payment_method, shipping_method, estimated_delivery, actual_delivery)
SELECT
    1 + floor(random()*1000)::int,
    CURRENT_DATE - (floor(random()*365*2))::int,
    (ARRAY['Pending','Shipped','Delivered','Cancelled'])[ceil(random()*4)],
    'Address ' || gs,
    'Address ' || gs,
    round(random()*1000,2),
    round(random()*100,2),
    round(random()*50,2),
    round(random()*1200,2),
    (ARRAY['Credit Card','PayPal','Cash'])[ceil(random()*3)],
    (ARRAY['Standard','Express','Overnight'])[ceil(random()*3)],
    CURRENT_DATE + (floor(random()*10))::int,
    CURRENT_DATE + (floor(random()*15))::int
FROM generate_series(1,2000) AS gs;

-- ---------- ORDER ITEMS ----------
INSERT INTO order_items (order_id, product_id, quantity, unit_price, discount, total_price)
SELECT
    1 + floor(random()*2000)::int,
    1 + floor(random()*500)::int,
    1 + floor(random()*10)::int,
    round(random()*500,2),
    round(random()*50,2),
    round(random()*500,2)
FROM generate_series(1,5000);

-- ---------- EMPLOYEES ----------
INSERT INTO employees (first_name, last_name, email, phone, hire_date, job_title, department, salary, manager_id, address)
SELECT
    fn.arr[ceil(random()*array_length(fn.arr,1))]::text,
    ln.arr[ceil(random()*array_length(ln.arr,1))]::text,
    lower(fn.arr[ceil(random()*array_length(fn.arr,1))] || '.' || ln.arr[ceil(random()*array_length(ln.arr,1))] || gs) || '@email.com',
    '+1-' || lpad(floor(random()*900+100)::int::text,3,'0') || '-' || lpad(floor(random()*900+100)::int::text,3,'0') || '-' || lpad(floor(random()*9000+1000)::int::text,4,'0'),
    CURRENT_DATE - (floor(random()*365*5))::int,
    'Job ' || gs,
    'Dept ' || (1 + floor(random()*10)::int),
    round(random()*150000,2),
    NULL,
    'Address ' || gs
FROM generate_series(1,200) AS gs,
     first_names fn,
     last_names ln;

-- ---------- REVIEWS ----------
INSERT INTO reviews (product_id, customer_id, rating, review_text, review_date, helpful_votes, verified_purchase)
SELECT
    1 + floor(random()*500)::int,
    1 + floor(random()*1000)::int,
    1 + floor(random()*5)::int,
    'Review text ' || gs,
    CURRENT_DATE - (floor(random()*365))::int,
    floor(random()*50)::int,
    (random() > 0.5)
FROM generate_series(1,3000) AS gs;

-- ==========================================
-- DONE: 20k+ Records Inserted
-- ==========================================
SELECT
    COUNT(*) AS customers_count,
    (SELECT COUNT(*) FROM products) AS products_count,
    (SELECT COUNT(*) FROM orders) AS orders_count,
    (SELECT COUNT(*) FROM order_items) AS order_items_count,
    (SELECT COUNT(*) FROM employees) AS employees_count,
    (SELECT COUNT(*) FROM suppliers) AS suppliers_count,
    (SELECT COUNT(*) FROM reviews) AS reviews_count
FROM customers;
