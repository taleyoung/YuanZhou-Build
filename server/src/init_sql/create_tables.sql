
-- 建表
CREATE TABLE page
(
    id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    content VARCHAR(100) NOT NULL,
    img VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE material
(
    id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    content VARCHAR(100) NOT NULL,
    img VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);