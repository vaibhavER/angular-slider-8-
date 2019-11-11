-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 11, 2019 at 03:16 AM
-- Server version: 5.6.44-cll-lve
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angularDashboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `heading` varchar(200) NOT NULL,
  `paraText` varchar(600) NOT NULL,
  `buttonText` varchar(50) NOT NULL,
  `imgpath` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `name`, `heading`, `paraText`, `buttonText`, `imgpath`) VALUES
(1, 'frst', 'Heading 1', 'Contrary to popular belief', 'click', 'assets/banner/banner1.jpg'),
(2, 'second', 'Heading 2', 'Contrary to popular belief', 'Click', 'assets/banner/banner2.jpg'),
(3, 'third', 'Heading 3', 'Contrary to popular belief', 'Click', 'assets/banner/banner3.jpg'),
(13, 'third', 'Heading 6', 'Contrary to popular belief', 'Click', 'assets/banner/banner2.jpg'),
(12, 'fourth', 'Heading 4', 'Contrary to popular belief', 'click', 'assets/banner/banner1.jpg'),
(11, 'fifth', 'Heading 5', '', 'Click', 'assets/banner/banner4.jpg'),
(14, 'fifth', 'Heading 10', 'ggg', 'Click', 'assets/banner/banner4.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
