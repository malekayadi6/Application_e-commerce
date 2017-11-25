-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  sam. 25 nov. 2017 à 14:10
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `asma`
--

-- --------------------------------------------------------

--
-- Structure de la table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
CREATE TABLE IF NOT EXISTS `addresses` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `address1` varchar(255) NOT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `addresses`
--

INSERT INTO `addresses` (`id`, `address1`, `address2`, `city`, `postal_code`, `created_at`, `updated_at`) VALUES
(1, 'male', NULL, 'malk', 'mak', '2017-09-02 10:46:19', '2017-09-02 10:46:19'),
(2, 'mmm', NULL, 'mmm', 'mm', '2017-09-02 10:49:42', '2017-09-02 10:49:42'),
(3, 'mmmmm', NULL, '202', '2000', '2017-09-02 10:50:48', '2017-09-02 10:50:48'),
(4, 'po', NULL, 'tunis', '25', '2017-09-02 10:53:17', '2017-09-02 10:53:17'),
(5, 'mm', NULL, 'mmm', '2000', '2017-09-02 10:54:58', '2017-09-02 10:54:58'),
(6, 'malek', NULL, 'malek', '20000', '2017-09-02 10:56:26', '2017-09-02 10:56:26'),
(7, 'mmm', NULL, 'mmm', '2055', '2017-09-02 11:09:24', '2017-09-02 11:09:24'),
(8, 'malek address ', NULL, 'bardo', '2000', '2017-09-02 12:45:22', '2017-09-02 12:45:22'),
(9, 'asma', NULL, 'asma', '20000', '2017-09-03 11:48:18', '2017-09-03 11:48:18'),
(10, 'malek', NULL, 'malek', '2000', '2017-09-10 16:49:49', '2017-09-10 16:49:49'),
(11, 'malek1505@gmail.com', NULL, 'bardo', '1475', '2017-11-18 20:59:01', '2017-11-18 20:59:01'),
(12, 'asma', NULL, 'bardo', '2000', '2017-11-19 10:21:14', '2017-11-19 10:21:14'),
(13, 'asma', NULL, 'asma', '2000', '2017-11-19 10:30:18', '2017-11-19 10:30:18'),
(14, '14 rue asmet anino', NULL, 'bardo', '2000', '2017-11-24 18:41:49', '2017-11-24 18:41:49');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `title`, `img1`, `img2`, `created_at`, `updated_at`) VALUES
(6, 'WOMENS', 'blog-avatar2.jpg', 'basketsquare.jpg', '2017-09-03 00:11:33', '2017-09-03 00:11:33'),
(7, 'MENS', 'men1.jpg', 'men2.jpg', '2017-09-03 00:12:02', '2017-09-03 00:12:02'),
(8, 'KIDS', 'kids1', 'kids2', '2017-09-03 00:12:02', '2017-09-03 00:12:02');

-- --------------------------------------------------------

--
-- Structure de la table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(90) NOT NULL,
  `email` varchar(70) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `created_at`, `updated_at`) VALUES
(1, 'mmmm', 'mmm@l.com', '2017-09-02 10:46:19', '2017-09-02 10:46:19'),
(2, 'malek', 'test@l.com', '2017-09-02 10:49:42', '2017-09-02 10:49:42'),
(3, 'mmm', 'malek@mm.com', '2017-09-02 10:50:48', '2017-09-02 10:50:48'),
(4, 'po', 'malek@mm.com', '2017-09-02 10:53:17', '2017-09-02 10:53:17'),
(5, 'mmm', 'mmm@l.com', '2017-09-02 10:54:57', '2017-09-02 10:54:57'),
(6, 'malek', 'mmm@l.com', '2017-09-02 10:56:26', '2017-09-02 10:56:26'),
(7, 'malek ayadi', 'malektest@gmail.com', '2017-09-02 12:45:22', '2017-09-02 12:45:22'),
(8, 'asma ', 'hhhhhhh@hhhhh.gmail.com', '2017-09-03 11:48:18', '2017-09-03 11:48:18'),
(9, 'malek', 'malektest@gmail.com', '2017-09-10 16:49:49', '2017-09-10 16:49:49'),
(10, 'malek', 'malek@li.com', '2017-11-18 20:59:00', '2017-11-18 20:59:00'),
(11, 'asma', 'asma@gmail.com', '2017-11-19 10:21:13', '2017-11-19 10:21:13'),
(12, 'malek ayadi', 'malek.ayadi91@gmail.com', '2017-11-24 18:41:49', '2017-11-24 18:41:49');

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE IF NOT EXISTS `images` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `title`, `product_id`, `created_at`, `updated_at`) VALUES
(6, 'SASSAFRAS Women Pink A-Line Dress 1', 8, '2017-09-03 18:38:04', '2017-09-03 18:38:04'),
(7, 'SASSAFRAS Women Pink A-Line Dress 2', 8, '2017-09-03 20:55:03', '2017-09-03 20:55:03'),
(8, 'SASSAFRAS Women Pink A-Line Dress 3', 8, '2017-09-03 20:55:08', '2017-09-03 20:55:08'),
(9, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 1', 9, '2017-09-03 20:54:43', '2017-09-03 20:54:43'),
(10, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2', 9, '2017-09-03 20:54:48', '2017-09-03 20:54:48'),
(11, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 3', 9, '2017-09-03 20:54:54', '2017-09-03 20:54:54'),
(12, 'Besiva Black Fit & Flare Dress 1', 10, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(13, 'Besiva Black Fit & Flare Dress 2', 10, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(14, 'Besiva Black Fit & Flare Dress 3', 10, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(15, 'Jaipur Kurti Women Red Solid Maxi Dress 1', 11, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(16, 'Jaipur Kurti Women Red Solid Maxi Dress 2', 11, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(17, 'Jaipur Kurti Women Red Solid Maxi Dress 3', 11, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(18, 'Jaipur Kurti Women Red Solid Maxi Dress 1', 12, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(19, 'Jaipur Kurti Women Red Solid Maxi Dress 2', 12, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(20, 'Jaipur Kurti Women Red Solid Maxi Dress 3', 12, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(21, 'MANGO Women Black Layered Sequinned Shift Dress 2', 13, '2017-09-03 20:51:39', '2017-09-03 20:51:39'),
(22, 'MANGO Women Black Layered Sequinned Shift Dress 1', 13, '2017-09-03 20:51:33', '2017-09-03 20:51:33'),
(23, 'MANGO Women Black Layered Sequinned Shift Dress 3', 13, '2017-09-03 20:51:50', '2017-09-03 20:51:50'),
(24, 'Zima Leto Women Mustard Yellow Solid A-line Dress 1', 14, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(25, 'Zima Leto Women Mustard Yellow Solid A-line Dress 2', 14, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(26, 'Zima Leto Women Mustard Yellow Solid A-line Dress 3', 14, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(27, 'Shree Women Red & Olive Green Woven Design Maxi Dress 1', 15, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(28, 'Shree Women Red & Olive Green Woven Design Maxi Dress 2', 15, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(29, 'Shree Women Red & Olive Green Woven Design Maxi Dress 3', 15, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(30, '	\r\nBesiva Black Bodycon Dress 1', 16, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(31, '	\r\nBesiva Black Bodycon Dress 2', 16, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(32, '	\r\nBesiva Black Bodycon Dress 3', 16, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(33, 'Athena Women Navy Blue Georgette Printed A-Line Dress 1', 17, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(34, 'Athena Women Navy Blue Georgette Printed A-Line Dress 2', 17, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(35, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3', 17, '2017-09-03 19:01:34', '2017-09-03 19:01:34'),
(36, 'test', 19, '2017-09-10 12:43:10', '2017-09-10 12:43:10'),
(37, 'basketsquare.jpg', 20, '2017-09-10 12:47:12', '2017-09-10 12:47:12'),
(38, 'Shree Women Red & Olive Green Woven Design Maxi Dress 3.jpg', 20, '2017-09-10 12:47:12', '2017-09-10 12:47:12'),
(39, 'Zima Leto Women Mustard Yellow Solid A-line Dress 2.jpg', 20, '2017-09-10 12:47:12', '2017-09-10 12:47:12'),
(40, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 1.jpg', 21, '2017-09-10 12:54:53', '2017-09-10 12:54:53'),
(41, 'basketsquare.jpg', 21, '2017-09-10 12:54:53', '2017-09-10 12:54:53'),
(42, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 3.jpg', 22, '2017-09-10 13:41:00', '2017-09-10 13:41:00'),
(43, 'basketsquare.jpg', 22, '2017-09-10 13:41:00', '2017-09-10 13:41:00'),
(44, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 23, '2017-09-10 13:42:09', '2017-09-10 13:42:09'),
(45, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 24, '2017-09-10 13:55:51', '2017-09-10 13:55:51'),
(46, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2.jpg', 24, '2017-09-10 13:55:51', '2017-09-10 13:55:51'),
(47, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 1.jpg', 24, '2017-09-10 13:55:51', '2017-09-10 13:55:51'),
(48, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 25, '2017-09-10 13:58:06', '2017-09-10 13:58:06'),
(49, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2.jpg', 26, '2017-09-10 13:59:28', '2017-09-10 13:59:28'),
(50, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 26, '2017-09-10 13:59:28', '2017-09-10 13:59:28'),
(51, 'basketsquare.jpg', 27, '2017-09-10 14:06:02', '2017-09-10 14:06:02'),
(52, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 27, '2017-09-10 14:06:02', '2017-09-10 14:06:02'),
(53, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 28, '2017-09-10 14:59:35', '2017-09-10 14:59:35'),
(54, 'Athena Women Navy Blue Georgette Printed A-Line Dress 2.jpg', 28, '2017-09-10 14:59:35', '2017-09-10 14:59:35'),
(55, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 1.jpg', 29, '2017-09-10 15:07:04', '2017-09-10 15:07:04'),
(56, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2.jpg', 29, '2017-09-10 15:07:04', '2017-09-10 15:07:04'),
(57, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 3.jpg', 29, '2017-09-10 15:07:04', '2017-09-10 15:07:04'),
(58, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 32, '2017-09-10 15:11:33', '2017-09-10 15:11:33'),
(59, 'Athena Women Navy Blue Georgette Printed A-Line Dress 2.jpg', 32, '2017-09-10 15:11:33', '2017-09-10 15:11:33'),
(60, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 3.jpg', 32, '2017-09-10 15:11:33', '2017-09-10 15:11:33'),
(61, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 34, '2017-09-10 15:13:00', '2017-09-10 15:13:00'),
(62, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2.jpg', 34, '2017-09-10 15:13:00', '2017-09-10 15:13:00'),
(63, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 1.jpg', 34, '2017-09-10 15:13:00', '2017-09-10 15:13:00'),
(64, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 35, '2017-09-10 15:20:07', '2017-09-10 15:20:07'),
(65, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 3.jpg', 35, '2017-09-10 15:20:07', '2017-09-10 15:20:07'),
(66, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 36, '2017-09-10 15:20:37', '2017-09-10 15:20:37'),
(67, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 3.jpg', 36, '2017-09-10 15:20:37', '2017-09-10 15:20:37'),
(68, 'Athena Women Navy Blue Georgette Printed A-Line Dress 2.jpg', 36, '2017-09-10 15:20:38', '2017-09-10 15:20:38'),
(69, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2.jpg', 36, '2017-09-10 15:20:38', '2017-09-10 15:20:38'),
(70, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 37, '2017-09-10 15:21:39', '2017-09-10 15:21:39'),
(71, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 3.jpg', 37, '2017-09-10 15:21:39', '2017-09-10 15:21:39'),
(72, 'Athena Women Navy Blue Georgette Printed A-Line Dress 2.jpg', 37, '2017-09-10 15:21:39', '2017-09-10 15:21:39'),
(73, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2.jpg', 37, '2017-09-10 15:21:39', '2017-09-10 15:21:39'),
(74, 'Athena Women Navy Blue Georgette Printed A-Line Dress 1.jpg', 37, '2017-09-10 15:21:39', '2017-09-10 15:21:39'),
(75, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 38, '2017-09-10 15:22:12', '2017-09-10 15:22:12'),
(76, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 3.jpg', 38, '2017-09-10 15:22:12', '2017-09-10 15:22:12'),
(77, 'Athena Women Navy Blue Georgette Printed A-Line Dress 2.jpg', 38, '2017-09-10 15:22:12', '2017-09-10 15:22:12'),
(78, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2.jpg', 38, '2017-09-10 15:22:12', '2017-09-10 15:22:12'),
(79, 'Athena Women Navy Blue Georgette Printed A-Line Dress 1.jpg', 38, '2017-09-10 15:22:12', '2017-09-10 15:22:12'),
(80, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 1.jpg', 38, '2017-09-10 15:22:12', '2017-09-10 15:22:12'),
(81, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 39, '2017-09-10 15:22:36', '2017-09-10 15:22:36'),
(82, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 3.jpg', 39, '2017-09-10 15:22:36', '2017-09-10 15:22:36'),
(83, 'Athena Women Navy Blue Georgette Printed A-Line Dress 2.jpg', 39, '2017-09-10 15:22:36', '2017-09-10 15:22:36'),
(84, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2.jpg', 39, '2017-09-10 15:22:36', '2017-09-10 15:22:36'),
(85, 'Athena Women Navy Blue Georgette Printed A-Line Dress 1.jpg', 39, '2017-09-10 15:22:37', '2017-09-10 15:22:37'),
(86, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 1.jpg', 39, '2017-09-10 15:22:37', '2017-09-10 15:22:37'),
(87, 'Athena Women Navy Blue Georgette Printed A-Line Dress 2.jpg', 40, '2017-09-10 15:26:15', '2017-09-10 15:26:15'),
(88, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 40, '2017-09-10 15:26:15', '2017-09-10 15:26:15'),
(89, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2.jpg', 40, '2017-09-10 15:26:15', '2017-09-10 15:26:15'),
(90, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 2.jpg', 41, '2017-09-10 15:26:48', '2017-09-10 15:26:48'),
(91, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 1.jpg', 41, '2017-09-10 15:26:48', '2017-09-10 15:26:48'),
(92, 'Athena Women Navy Blue Georgette Printed A-Line Dress 1.jpg', 41, '2017-09-10 15:26:48', '2017-09-10 15:26:48'),
(93, 'Athena Women Navy Blue Georgette Printed A-Line Dress 3.jpg', 42, '2017-09-10 15:27:13', '2017-09-10 15:27:13'),
(94, 'Athena Women Navy Blue Georgette Printed A-Line Dress 2.jpg', 42, '2017-09-10 15:27:13', '2017-09-10 15:27:13'),
(95, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress 1.jpg', 42, '2017-09-10 15:27:13', '2017-09-10 15:27:13'),
(96, 'asma.PNG', 43, '2017-09-10 16:57:39', '2017-09-10 16:57:39'),
(97, 'gg.PNG', 43, '2017-09-10 16:57:39', '2017-09-10 16:57:39'),
(98, 'xxx.PNG', 43, '2017-09-10 16:57:39', '2017-09-10 16:57:39'),
(99, 'desktop-year-of-the-tiger-images-wallpaper.jpg', 44, '2017-11-18 21:42:14', '2017-11-18 21:42:14'),
(100, 'les-animaux-fantastiques-crimes-grindelwald-image-1-640x360.jpg', 45, '2017-11-18 21:44:04', '2017-11-18 21:44:04'),
(101, '13096079_10207296050013518_3806434405971021276_n.jpg', 45, '2017-11-18 21:44:04', '2017-11-18 21:44:04'),
(102, 'desktop-year-of-the-tiger-images-wallpaper.jpg', 45, '2017-11-18 21:44:04', '2017-11-18 21:44:04'),
(103, 'desktop-year-of-the-tiger-images-wallpaper.jpg', 46, '2017-11-19 12:09:49', '2017-11-19 12:09:49'),
(104, 'les-animaux-fantastiques-crimes-grindelwald-image-1-640x360.jpg', 46, '2017-11-19 12:09:49', '2017-11-19 12:09:49'),
(105, 'asma.PNG', 46, '2017-11-19 12:09:49', '2017-11-19 12:09:49'),
(106, 'asma2.PNG', 47, '2017-11-19 12:14:04', '2017-11-19 12:14:04'),
(107, '13096079_10207296050013518_3806434405971021276_n.jpg', 47, '2017-11-19 12:14:04', '2017-11-19 12:14:04'),
(108, 'les-animaux-fantastiques-crimes-grindelwald-image-1-640x360.jpg', 48, '2017-11-19 12:14:44', '2017-11-19 12:14:44'),
(109, 'asma.PNG', 48, '2017-11-19 12:14:44', '2017-11-19 12:14:44'),
(110, 'asma2.PNG', 48, '2017-11-19 12:14:44', '2017-11-19 12:14:44'),
(111, 'desktop-year-of-the-tiger-images-wallpaper.jpg', 49, '2017-11-19 12:26:05', '2017-11-19 12:26:05'),
(112, 'les-animaux-fantastiques-crimes-grindelwald-image-1-640x360.jpg', 49, '2017-11-19 12:26:05', '2017-11-19 12:26:05'),
(113, 'desktop-year-of-the-tiger-images-wallpaper.jpg', 50, '2017-11-19 12:46:14', '2017-11-19 12:46:14'),
(114, 'les-animaux-fantastiques-crimes-grindelwald-image-1-640x360.jpg', 50, '2017-11-19 12:46:14', '2017-11-19 12:46:14'),
(115, '13096079_10207296050013518_3806434405971021276_n.jpg', 50, '2017-11-19 12:46:14', '2017-11-19 12:46:14'),
(116, 'desktop-year-of-the-tiger-images-wallpaper.jpg', 51, '2017-11-19 12:47:14', '2017-11-19 12:47:14'),
(117, 'les-animaux-fantastiques-crimes-grindelwald-image-1-640x360.jpg', 51, '2017-11-19 12:47:14', '2017-11-19 12:47:14');

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `hash` varchar(255) NOT NULL,
  `total` float NOT NULL,
  `address_id` int(11) NOT NULL,
  `paid` tinyint(1) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `orders`
--

INSERT INTO `orders` (`id`, `hash`, `total`, `address_id`, `paid`, `customer_id`, `created_at`, `updated_at`) VALUES
(1, 'f7aa0d21846f8bad1db4b9d00eba5a3393bfdc82ebb2af19970b07ef1cd1fc17', 10, 1, 1, 1, '2017-09-02 12:46:21', '2017-09-02 10:46:21'),
(2, '0b7003d42b903e4e1bb5f0d2565b3612458a5767a4fdf1ab9e4ec6ff321e9fa8', 10, 2, 1, 2, '2017-09-02 12:49:44', '2017-09-02 10:49:44'),
(3, '97c88fcdd03ce3d5a44bfab5e7c0d06614b643aac67f2553a710f326c829c800', 10, 3, 1, 3, '2017-09-02 12:50:49', '2017-09-02 10:50:49'),
(4, '3af7f174aed4b394535ef77592e5094b2deb1b811de3e1a5e96f8621227f274d', 10, 4, 1, 4, '2017-09-02 12:53:19', '2017-09-02 10:53:19'),
(5, '7b9abd8a25cbf81663549171cdd89e9375ac8be3e9884f8141934cc387e3049a', 10, 5, 1, 5, '2017-09-02 12:54:59', '2017-09-02 10:54:59'),
(6, '94a93bc59915ed83565cd2fe88574f10545b15dc35a70c0497a8274fc09ba4a0', 10, 6, 1, 6, '2017-09-02 12:56:28', '2017-09-02 10:56:28'),
(7, 'bccbf1413e544bd1b6cbd8719cb99443716de5a138b226056837400d18af8cef', 10, 7, 1, 6, '2017-09-02 13:09:25', '2017-09-02 11:09:25'),
(8, 'f251c1891d19995bbdea1e27b5f777bc1cdc91691ed2f605ad5283fd6c9d5c6e', 10, 8, 1, 7, '2017-09-02 14:45:24', '2017-09-02 12:45:24'),
(9, '9277d92bf9bbcc05e762c7ab1517cd58af5e3dcefd42de27ca548352bf9c0522', 25, 9, 1, 8, '2017-09-03 13:48:20', '2017-09-03 11:48:20'),
(10, 'cf3caa073f22921cc3d71056677bd158c3c2d5d8988909ccee84b4be65d34480', 80, 10, 1, 9, '2017-09-10 18:49:51', '2017-09-10 16:49:51'),
(11, 'bbb7d09066a3288ac922ed7f4bb4da2b3935bc21f8d8b399692f877d578fc844', 365, 11, 1, 10, '2017-11-18 21:59:04', '2017-11-18 20:59:04'),
(12, 'd92c13c59fd514c550dcdcc0ac544d32d2bdcc15d2a830526aba408b8f1bac23', 311, 12, 1, 11, '2017-11-19 11:21:16', '2017-11-19 10:21:16'),
(13, '738b244e2711d699d3975148a33aaf8248e5a9c3dc92f1576c3e8c8f3baee943', 260, 13, 1, 11, '2017-11-19 11:30:20', '2017-11-19 10:30:20'),
(14, 'b379152db6e6b55ad9fb9baf3c292856ebe2af33a2ce0a5f19ac12b271f85abd', 3147, 14, 1, 12, '2017-11-24 19:41:52', '2017-11-24 18:41:52');

-- --------------------------------------------------------

--
-- Structure de la table `orders_products`
--

DROP TABLE IF EXISTS `orders_products`;
CREATE TABLE IF NOT EXISTS `orders_products` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `orders_products`
--

INSERT INTO `orders_products` (`id`, `order_id`, `product_id`, `quantity`) VALUES
(1, 1, 6, 1),
(2, 2, 6, 1),
(3, 3, 6, 1),
(4, 4, 6, 1),
(5, 5, 6, 1),
(6, 6, 6, 1),
(7, 7, 6, 1),
(8, 8, 6, 1),
(9, 9, 7, 4),
(10, 10, 16, 3),
(11, 11, 14, 3),
(12, 12, 16, 2),
(13, 12, 17, 1),
(14, 12, 45, 1),
(15, 13, 17, 1),
(16, 14, 10, 3),
(17, 14, 15, 1),
(18, 14, 16, 1);

-- --------------------------------------------------------

--
-- Structure de la table `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL DEFAULT '0',
  `failed` tinyint(1) NOT NULL DEFAULT '0',
  `transaction_id` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `payments`
--

INSERT INTO `payments` (`id`, `order_id`, `failed`, `transaction_id`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 'nbt8dhhx', '2017-09-02 10:46:21', '2017-09-02 10:46:21'),
(2, 2, 0, '895rx3v6', '2017-09-02 10:49:44', '2017-09-02 10:49:44'),
(3, 3, 0, 'rcmsdvc9', '2017-09-02 10:50:49', '2017-09-02 10:50:49'),
(4, 4, 0, 'f3cfqake', '2017-09-02 10:53:19', '2017-09-02 10:53:19'),
(5, 5, 0, 'a9mv979m', '2017-09-02 10:54:59', '2017-09-02 10:54:59'),
(6, 6, 0, '9ftw7v1c', '2017-09-02 10:56:28', '2017-09-02 10:56:28'),
(7, 7, 0, 'nc7rbt91', '2017-09-02 11:09:25', '2017-09-02 11:09:25'),
(8, 8, 0, 'pj2g1efq', '2017-09-02 12:45:24', '2017-09-02 12:45:24'),
(9, 9, 0, 'nwsj76dr', '2017-09-03 11:48:20', '2017-09-03 11:48:20'),
(10, 10, 0, 'na5ds95q', '2017-09-10 16:49:51', '2017-09-10 16:49:51'),
(11, 11, 0, '164x8naf', '2017-11-18 20:59:04', '2017-11-18 20:59:04'),
(12, 12, 0, 'qnmw4735', '2017-11-19 10:21:16', '2017-11-19 10:21:16'),
(13, 13, 0, 'cfpewchp', '2017-11-19 10:30:20', '2017-11-19 10:30:20'),
(14, 14, 0, '5ms94hgx', '2017-11-24 18:41:52', '2017-11-24 18:41:52');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `price` float NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `subcategorie_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `title`, `slug`, `description`, `price`, `image`, `stock`, `subcategorie_id`, `created_at`, `updated_at`) VALUES
(8, 'SASSAFRAS Women Pink A-Line Dress\r\n', 'slug', 'Dusty pink solid woven A-line dress, has a square neck, short cold shoulder sleeves, flared hem, an attached inner lining', 899, 'mmm', 2, 11, '2017-09-10 18:53:53', '2017-09-10 18:53:53'),
(9, 'AKS Women Brown Kalamkari Print Layered A-Line Midi Dress', 'mm', 'Brown kalamkari print woven layered A-line midi dress, has a round neck, a short button placket, short sleeves, flared hem', 799, 'mmm', 0, 11, '2017-09-10 18:53:57', '2017-09-10 18:53:57'),
(10, 'Besiva Black Fit & Flare Dress\r\n', 'll', 'Black fit and flare dress, woven, sheer panel at the chest and the back with sweetheart styling at the front, keyhole at the back with buttoned and loop closure, box pleat detail below the waist, flared hemline with ruffles', 999, 'mmm', 0, 11, '2017-11-24 19:41:52', '2017-11-24 18:41:52'),
(11, 'Jaipur Kurti Women Red Solid Maxi Dress\r\n', 'mm', 'Red solid woven maxi dress, has a notched round neck, short sleeves, an insert pocket, straight hem', 645, '', 5, 11, '2017-09-10 18:54:07', '2017-09-10 18:54:07'),
(12, 'DOROTHY PERKINS Women Black & White Polka Dot Print A-Line Dress', 'mm', 'Black and white printed knitted A-line dress, has a round neck, short sleeves, button closure, straight hem', 240, '', 6, 11, '2017-09-10 18:54:11', '2017-09-10 18:54:11'),
(13, 'MANGO Women Black Layered Sequinned Shift Dress\n', 'mmm', 'Black layered sequinned knit shift dress, has shoulder straps forming a stylised square neck, inner lining', 422, 'mmmm', 2, 11, '2017-09-10 18:54:15', '2017-09-10 18:54:15'),
(14, 'Zima Leto Women Mustard Yellow Solid A-line Dress', 'mmm', 'Mustard yellow solid woven A-line dress with tie-up detail, has a notched round neck, three-quarter sleeves', 120, 'oooo', 0, 11, '2017-11-18 21:59:04', '2017-11-18 20:59:04'),
(15, 'Shree Women Red & Olive Green Woven Design Maxi Dress', 'ppp', 'Red and olive green woven design maxi dress, has a round neck, three-quarter sleeves, mock button placket, concealed zip closure, flared hem, high slit on the front', 120, 'llll', 0, 11, '2017-11-24 19:41:53', '2017-11-24 18:41:53'),
(16, 'Besiva Black Bodycon Dress\r\n', 'mmm', 'Black knitted bodycon dress, has a round neck, sheer panel on the front shoulders that extends to the back yoke, seams on the front and back sides, darts on the front and back, key-hole detail with button and loop closure on the back', 25, 'pppp', 0, 11, '2017-11-24 19:41:53', '2017-11-24 18:41:53'),
(17, 'Athena Women Navy Blue Georgette Printed A-Line Dress', 'mmm', 'Navy blue and white woven A-line dress, has a boat neck, three-quarter sleeves, solid bodice and printed skirt portion, has two insert pockets, has an attached lining', 255, 'pppp', 0, 11, '2017-11-19 11:30:20', '2017-11-19 10:30:20'),
(33, 'malek 147', NULL, 'aa', 1, NULL, 1, 29, '2017-09-10 15:12:29', '2017-09-10 15:12:29'),
(34, 'malek 150', NULL, 'malek ayadi ', 1, NULL, 1, 29, '2017-09-10 15:13:00', '2017-09-10 15:13:00'),
(35, 'asma', NULL, 'asma', 1, NULL, 1, 28, '2017-09-10 15:20:07', '2017-09-10 15:20:07'),
(36, 'asma 4', NULL, 'asma 4', 1, NULL, 1, 28, '2017-09-10 15:20:37', '2017-09-10 15:20:37'),
(37, 'saber ', NULL, 'saber ', 1, NULL, 1, 29, '2017-09-10 15:21:39', '2017-09-10 15:21:39'),
(38, 'saber 2 ', NULL, 'saber 3 ', 1, NULL, 1, 29, '2017-09-10 15:22:12', '2017-09-10 15:22:12'),
(39, 'saber 3 ', NULL, 'malek 14 ', 2, NULL, 1, 29, '2017-09-10 15:22:36', '2017-09-10 15:22:36'),
(40, 'sara 1 ', NULL, 'malek ', 1, NULL, 1, 28, '2017-09-10 15:26:15', '2017-09-10 15:26:15'),
(41, 'sara 12', NULL, 'malek ', 1, NULL, 1, 28, '2017-09-10 15:26:48', '2017-09-10 15:26:48'),
(42, 'sara 15', NULL, 'malek 14', 2, NULL, 2, 28, '2017-09-10 15:27:13', '2017-09-10 15:27:13'),
(47, 'malek', NULL, 'mm', -2, NULL, -2, 19, '2017-11-19 12:14:04', '2017-11-19 12:14:04');

-- --------------------------------------------------------

--
-- Structure de la table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
CREATE TABLE IF NOT EXISTS `subcategories` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `categorie_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `subcategories`
--

INSERT INTO `subcategories` (`id`, `title`, `categorie_id`, `created_at`, `updated_at`) VALUES
(11, 'Dresses\r\n', 6, '2017-09-03 17:43:11', '2017-09-03 17:43:11'),
(12, 'Shorts', 6, '2017-09-03 17:43:11', '2017-09-03 17:43:11'),
(13, 'Jeans', 6, '2017-09-03 17:43:11', '2017-09-03 17:43:11'),
(14, 'Party Dresses', 6, '2017-09-03 17:43:11', '2017-09-03 17:43:11'),
(15, 'Shirts & Blouses', 6, '2017-09-03 17:43:11', '2017-09-03 17:43:11'),
(16, 'Suits & Separates', 6, '2017-09-03 17:43:11', '2017-09-03 17:43:11'),
(17, 'Coats & Jackets', 6, '2017-09-03 17:43:11', '2017-09-03 17:43:11'),
(18, 'T-Shirts & Vests', 7, '2017-09-03 17:47:05', '2017-09-03 17:47:05'),
(19, 'Jumpers & Cardigans', 7, '2017-09-03 17:47:05', '2017-09-03 17:47:05'),
(20, 'Hoodies & Sweatshirts', 7, '2017-09-03 17:47:05', '2017-09-03 17:47:05'),
(21, 'Coats & Jackets\r\n', 7, '2017-09-03 17:47:05', '2017-09-03 17:47:05'),
(22, 'Jeans\r\n', 7, '2017-09-03 17:47:05', '2017-09-03 17:47:05'),
(23, 'Big & Tall\r\n', 7, '2017-09-03 17:47:05', '2017-09-03 17:47:05'),
(24, 'Polos', 7, '2017-09-03 17:47:05', '2017-09-03 17:47:05'),
(25, 'Shirts', 7, '2017-09-03 17:47:05', '2017-09-03 17:47:05'),
(26, 'Shorts\r\n', 7, '2017-09-03 17:47:05', '2017-09-03 17:47:05');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`, `created_at`, `updated_at`) VALUES
(1, 'malek ayadi', 'malek.ayadi91@gmail.com', 'malekmalek', 1, '2017-09-10 18:22:18', '2017-09-10 18:22:18'),
(2, 'malek ayadi ', 'malekayadi66@gmail.com', 'malekmalek', 2, '2017-09-10 18:22:18', '2017-09-10 18:22:18');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
