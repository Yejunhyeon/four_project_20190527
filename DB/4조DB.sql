-- MySQL dump 10.17  Distrib 10.3.14-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: src
-- ------------------------------------------------------
-- Server version	10.3.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `src`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `src` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `src`;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nick` varchar(20) NOT NULL,
  `context` varchar(30) DEFAULT NULL,
  `password` varchar(15) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `commenter` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `commenter` (`commenter`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`commenter`) REFERENCES `questions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'최민준','첫번째 댓글','123','2019-06-11 18:24:56','2019-06-11 18:24:56',NULL,1),(2,'최민준','두번째질문의 첫번째 댓글','123','2019-06-11 18:25:29','2019-06-11 18:25:29','2019-06-11 18:26:37',2),(3,'최민준','두번째 댓글','123','2019-06-11 18:26:07','2019-06-11 18:26:07',NULL,1),(4,'최민준','qwe','123','2019-06-11 20:27:06','2019-06-11 20:27:06','2019-06-12 03:39:34',4),(5,'최민준','asdf','123','2019-06-11 20:30:16','2019-06-11 20:30:16','2019-06-12 02:54:11',3),(6,'최민준','123','123','2019-06-11 20:31:54','2019-06-11 20:31:54','2019-06-12 02:54:11',3),(7,'최민준','qweqwe','123','2019-06-11 20:32:03','2019-06-11 20:32:03','2019-06-11 20:32:10',3),(8,'최민준','wqe','123','2019-06-12 11:17:56','2019-06-12 11:17:56',NULL,1),(9,'최민준',' ㄱㄷ','123','2019-06-12 11:28:57','2019-06-12 11:28:57','2019-06-12 11:29:01',1);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `japans`
--

DROP TABLE IF EXISTS `japans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `japans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(40) DEFAULT NULL,
  `place` varchar(40) DEFAULT NULL,
  `cost` varchar(40) DEFAULT NULL,
  `plan` varchar(40) DEFAULT NULL,
  `experience` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `japans`
--

LOCK TABLES `japans` WRITE;
/*!40000 ALTER TABLE `japans` DISABLE KEYS */;
INSERT INTO `japans` VALUES (1,'7월 29일 ~ 8월 4일','후쿠오카','일어 청해/말하기/작문','3만엔','문화탐방'),(2,'8월 5일 ~ 8월 11일','구루메시','실무일본어 회화','3만엔','지역 라디오 출연'),(3,'8월 12일 ~ 8월 18일','구마모토','일본 비지니스 현장 실습','3만엔','Yahoo Japan 개발자 컨퍼런스 참석'),(4,'8월 19일 ~ 8월 25일','후쿠오카','일본 비지니스 매너','3만엔','후쿠오카대학 오픈 캠퍼스 참석'),(5,'8월 26일 ~ 9월 1일','후쿠오카','일본인 친구 만들기','3만엔','한일 교류회 개최'),(6,'9월 2일 ~ 9월 8일','후쿠오카','일본취업관한 마음 다지기','3만엔','봉사활동');
/*!40000 ALTER TABLE `japans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nick` varchar(20) NOT NULL,
  `context` varchar(30) NOT NULL,
  `password` varchar(15) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'최민준','첫번째 질문','1234','2019-06-11 18:24:30','2019-06-11 18:24:30',NULL),(2,'최민준','두번째 질문','123','2019-06-11 18:24:42','2019-06-11 18:24:42','2019-06-11 18:26:37'),(3,'최민준','질문충','123','2019-06-11 18:26:18','2019-06-11 18:26:18','2019-06-12 02:54:11'),(4,'최민준','퍼킹질문충','123','2019-06-11 18:26:33','2019-06-11 18:26:33','2019-06-12 03:39:34'),(5,'최민준','5','123','2019-06-11 23:56:38','2019-06-11 23:56:38',NULL);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  `birth` varchar(20) DEFAULT NULL,
  `bloodtype` varchar(10) DEFAULT NULL,
  `highschool` varchar(20) DEFAULT NULL,
  `adrs` varchar(15) DEFAULT NULL,
  `motto` varchar(30) DEFAULT NULL,
  `introduce` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'유소영','1998.10.07','A','인천여자상업고등학교','고양시 일산동구','역지사지','안녕하세요! 4조의 조장 유소영입니다.'),(2,'김민수','1997.06.24','A','영등포고등학교','서울시 동작구 상도동','사서 고생하지말자','안녕하십니까 4조의 김민수입니다.'),(3,'예준현','1997.11.13','O','심인고등학교','대구광역시 남구 대명동','스스로 하고 스스로 해내자','안녕하세요! 4조의 예준현입니다. 잘 부탁드립니다.'),(4,'최민준','1997.04.09','AB','시지고등학교','대구광역시 수성구 신매동','열심히하면 맛있는걸 먹을 수 있다.','안녕하십니까 4조의 고구마 최민준입니다.'),(5,'이형철','1993.11.10','O','구미전자공업고등학교','경주시 현곡면 하구리','카르페디엠','안녕하십니까 4조의 이형철입니다. 잘 부탁드립니다.');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(40) NOT NULL,
  `nick` varchar(15) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `provider` varchar(10) NOT NULL DEFAULT 'local',
  `tel` varchar(15) NOT NULL,
  `adr` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'qwe@gmail.com','1234','$2b$12$D2gK0HCHzq0/CtHOlUvyi.kF1vKku.Bx7J5Qxsy1RdkDuQAvD0SS2','local','1234','1234','2019-06-03 11:42:13','2019-06-03 11:42:13',NULL),(2,'zkxm008@naver.com','최민준','$2b$12$.1Px7sWJ89IRsFUJ/n4jK.lYfU.aG8zPXRjAA/5.jMJPspWo4g0k.','local','123','123','2019-06-04 10:14:58','2019-06-04 10:14:58',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-14 20:17:57
