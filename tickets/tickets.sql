-- As a student I want to log in and have the ability to see tickets that are currently open for help.
    -- get list of tickets by studentid
        SELECT * FROM Tickets WHERE Tickets.studentid=studentid;

    -- view individual ticket 
        SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;


-- As a student I want to be able to create a new help ticket with a title, description, what I've tried and a category (i.e. React).
    INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");


-- As a helper I want to be able to login and see a list of open tickets. 
    -- get list of tickets in queue
        SELECT * FROM Tickets WHERE Tickets.status="queue";
    -- get list of tickets by helperid
        SELECT * FROM Tickets WHERE Tickets.helperid=helperid;


-- As a helper I want to be able to assign a ticket to myself by clicking a "help student" button.
    -- SQL to update ticket.helperid to current helperid
        UPDATE Tickets.helperid = "" && Ticket.status="" WHERE Tickets.ticketsid="";


-- As a helper I want to be able to mark the ticket as "resolved", or re-assign the ticket back to the queue if I cannot resolve the ticket.
    -- SQL to update ticket.status to "resolved" or "queue" && ticket.helperid=""
        UPDATE Tickets.helperid = "" && Ticket.status="resolved" WHERE Tickets.ticketsid="";
        UPDATE Tickets.helperid = "" && Ticket.status="queue" WHERE Tickets.ticketsid="";


-----------------------------------------------------------
-- How to get a three:
-----------------------------------------------------------

-- Build an integrated slack-bot that allows students to submit help tickets through slack. 
        -- SQL to insert into Tickets newTicket
            INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");

-- Allow the ability to subscribe to the Queue in slack to be notified if someone opens a ticket.
        -- SQL to get list of tickets 
            SELECT * FROM Tickets WHERE Tickets.studentid=studentid;
        -- SQL to get individual ticket
            SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;
        -- SQL to insert into Tickets newTicket
            INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");

    -- Notify when SQL to insert into Tickets newTicket function ran
	-- Slack action to create ticket -- > send from Slack API to our API
	-- On ticket creation or ticket status change, send notification to slack api
	-- Slack API notifies Slackbot that there's a new ticket/status change
	-- Slackbot receives that notification and notifies subscriber/user

-- Make it so a user can be both a student and a helper.

    -- to view all helpers: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='helper'
        ORDER BY Users.usersid;
    -- to view all students: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='student'
        ORDER BY Users.usersid;
    -- to view all students who are also helpers: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='helper'
        ORDER BY Users.usersid
        UNION 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='student'
        ORDER BY Users.usersid;

-- update own user profile
    UPDATE Users.password = "" WHERE Users.usersid="";
    UPDATE Users.email = "" WHERE Users.usersid="";
    UPDATE Users.name = "" WHERE Users.usersid="";

-- remove helper status
    DELETE FROM Userroles where Userroles.usersid='' && WHERE Userroles.rolesid='';

-- add helper status
    INSERT INTO Userroles (usersid, rolesid) VALUES ('', '');

-- delete user
    DELETE FROM Users where Users.usersid='';

-- delete ticket
    DELETE FROM Tickets where Tickets.ticketsid='';
