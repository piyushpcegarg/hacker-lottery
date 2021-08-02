DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS lobby;

CREATE TABLE lobby(  
  id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
  name varchar(20) NOT NULL comment 'name',
  entry_fees int NOT NULL comment 'entry fees',
  max_members int NOT NULL comment 'maximum members',
  prize_money int NOT NULL comment 'prize money',
  lobby_charges int NOT NULL comment 'lobby charges',
  active_members int NOT NULL comment 'active members',
  winner varchar(20) comment 'winner name',
  status varchar(5) NOT NULL comment 'status of lobby'
) default charset utf8 comment 'lobby table';


CREATE TABLE members (
  id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
  lobby_id int NOT NULL,
  name VARCHAR(20) NOT NULL,
  FOREIGN KEY(lobby_id) REFERENCES lobby(id)
);
