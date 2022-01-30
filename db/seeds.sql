INSERT INTO department (id, name)
VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');


INSERT INTO job (id, title, salary, department_id)
VALUES
(1, 'Sales Lead', 100000, 1),
(2, 'Salesperson', 80000, 1),
(3, 'Software Engineer', 120000, 2),
(4, 'Accountant', 125000, 3),
(5, 'Lawyer', 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES
(1, 'Solid', 'Snake', 1),
(2, 'Samus', 'Aran', 3),
(3, 'Cloud', 'Strife', 4),
(4, 'Marcus', 'Fenix', 3),
(5, 'Fox', 'McCloud', 3),
(6, 'Arthur', 'Morgan', 5);