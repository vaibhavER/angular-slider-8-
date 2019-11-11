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
-- Table structure for table `sliderControl`
--

CREATE TABLE `sliderControl` (
  `id` int(11) NOT NULL,
  `nav` varchar(100) NOT NULL,
  `dot` varchar(100) NOT NULL,
  `imgSelect` varchar(100) NOT NULL,
  `mouse` varchar(50) NOT NULL,
  `keyBoard` varchar(100) NOT NULL,
  `items` int(50) NOT NULL,
  `_1199` int(20) NOT NULL,
  `_768` int(20) NOT NULL,
  `_480` int(20) NOT NULL,
  `_360` int(11) NOT NULL,
  `_1500` int(11) NOT NULL,
  `_1700` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sliderControl`
--

INSERT INTO `sliderControl` (`id`, `nav`, `dot`, `imgSelect`, `mouse`, `keyBoard`, `items`, `_1199`, `_768`, `_480`, `_360`, `_1500`, `_1700`) VALUES
(1, 'true', 'true', 'html', 'true', 'true', 7, 4, 3, 2, 1, 6, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sliderControl`
--
ALTER TABLE `sliderControl`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sliderControl`
--
ALTER TABLE `sliderControl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
