DROP DATABASE IF EXISTS fletat1_project;
CREATE DATABASE fletat1_project;
USE fletat1_project;

DROP TABLE IF EXISTS Location;
DROP TABLE IF EXISTS WaterSource;

CREATE TABLE WaterSource (
  waterSourceID int NOT NULL AUTO_INCREMENT,
  riverName varchar(50) NOT NULL,
  quality int NOT NULL,
  danger int NOT NULL,
  PRIMARY KEY (waterSourceID)
) ENGINE=InnoDB;

CREATE TABLE Location (
  locationID int NOT NULL AUTO_INCREMENT,
  waterSourceID int NOT NULL,
  latitude double NOT NULL,
  longitude double NOT NULL,
  directions varchar(255),
  address varchar(50),
  PRIMARY KEY (locationID),
  FOREIGN KEY (waterSourceID) REFERENCES WaterSource (waterSourceID)
) ENGINE=InnoDB;