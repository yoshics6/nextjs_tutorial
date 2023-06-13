-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2023 at 11:27 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testnextjs`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `post_date` date NOT NULL,
  `topic` text NOT NULL,
  `filename` text NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `active` enum('Yes','No') NOT NULL DEFAULT 'Yes',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `arr` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`banner_id`, `post_date`, `topic`, `filename`, `status`, `active`, `created_at`, `arr`) VALUES
(5, '2023-06-03', 'werew2333', 'eedda1f5fb673_EjrpiCNU0AAL5Cw.jpg', 'Active', 'No', '2023-06-02 18:56:18', 0),
(6, '2023-06-02', 'qwewq', '34b76954a525c_EmVZYerVgAEVhQj.jpg', 'Active', 'No', '2023-06-02 18:56:26', 1),
(7, '2023-06-02', 'wrwrewrwrew', '8e6bf28defea2_EmVZYerVgAEVhQj - Copy.jpg', 'Active', 'Yes', '2023-06-02 19:25:43', 2),
(8, '2023-06-02', 'test', '06d60a6030337_bg.PNG', 'Active', 'Yes', '2023-06-02 20:55:14', 0);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `fullname` text NOT NULL,
  `company_name` text NOT NULL,
  `phone_number` text NOT NULL,
  `email` text NOT NULL,
  `message` text NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `subject` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cover_paper`
--

CREATE TABLE `cover_paper` (
  `cp_id` int(11) NOT NULL,
  `cp_name` varchar(255) NOT NULL,
  `cp_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cover_paper`
--

INSERT INTO `cover_paper` (`cp_id`, `cp_name`, `cp_created_at`) VALUES
(1, 'Art Card 210 gsm', '2023-06-12 12:11:50'),
(2, 'Woodfree 80 gsm', '2023-06-12 12:11:50'),
(3, 'Art Card 190 gsm', '2023-06-12 12:11:50'),
(4, 'Art Card 230 gsm', '2023-06-12 12:11:50'),
(5, 'Woodfree 100 gsm', '2023-06-12 12:11:50'),
(6, 'Woodfree 120 gsm', '2023-06-12 12:11:50'),
(7, 'White Card  120 gsm', '2023-06-12 12:11:50'),
(8, 'White Card 150 gsm', '2023-06-12 12:11:50'),
(9, 'Gloss Art/Matt Art 105 gsm', '2023-06-12 12:11:50'),
(10, 'Gloss Art/Matt Art 128 gsm', '2023-06-12 12:11:50'),
(11, 'Gloss Art/Matt Art 157 gsm', '2023-06-12 12:11:50'),
(12, 'Art Card 260 gsm', '2023-06-12 12:11:50'),
(13, 'Whitecard 150 gsm', '2023-06-12 12:11:50'),
(14, 'Whitecard 210 gsm', '2023-06-12 12:11:50'),
(15, 'Whitecard 240 gsm', '2023-06-12 12:11:50'),
(16, 'Art Card 310 gsm', '2023-06-12 12:11:50'),
(17, 'Art Card 350 gsm', '2023-06-12 12:11:50');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL,
  `post_date` date NOT NULL,
  `topic` text NOT NULL,
  `detail` text NOT NULL,
  `status` enum('Publish','Draft') NOT NULL DEFAULT 'Publish',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`news_id`, `post_date`, `topic`, `detail`, `status`, `created_at`) VALUES
(3, '2023-06-02', 'test', '<p>test</p>', 'Publish', '2023-06-02 23:33:24');

-- --------------------------------------------------------

--
-- Table structure for table `saddle_stitch`
--

CREATE TABLE `saddle_stitch` (
  `sadd_id` int(11) NOT NULL,
  `sadd_type` varchar(255) NOT NULL,
  `sadd_finished_size` enum('A4','B5') NOT NULL,
  `sadd_cover` enum('4') NOT NULL,
  `sadd_text` enum('4','8','12','16','20','24','28','32','36','40','44','48','52','56','60') NOT NULL,
  `sadd_cover_paper` enum('Woodfree 80 gsm') NOT NULL,
  `sadd_text_paper` enum('Woodfree 80 gsm') NOT NULL,
  `sadd_printing` enum('4/4C') NOT NULL,
  `sadd_cover_coating` enum('No coating') NOT NULL,
  `sadd_text_coating` enum('No coating') NOT NULL,
  `sadd_1000` int(11) NOT NULL,
  `sadd_2000` int(11) NOT NULL,
  `sadd_3000` int(11) NOT NULL,
  `sadd_4000` int(11) NOT NULL,
  `sadd_5000` int(11) NOT NULL,
  `sadd_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `saddle_stitch`
--

INSERT INTO `saddle_stitch` (`sadd_id`, `sadd_type`, `sadd_finished_size`, `sadd_cover`, `sadd_text`, `sadd_cover_paper`, `sadd_text_paper`, `sadd_printing`, `sadd_cover_coating`, `sadd_text_coating`, `sadd_1000`, `sadd_2000`, `sadd_3000`, `sadd_4000`, `sadd_5000`, `sadd_created_at`) VALUES
(1, 'Stitch', 'A4', '4', '12', 'Woodfree 80 gsm', 'Woodfree 80 gsm', '4/4C', 'No coating', 'No coating', 100, 200, 300, 400, 500, '2023-06-09 08:18:33');

-- --------------------------------------------------------

--
-- Table structure for table `text_no`
--

CREATE TABLE `text_no` (
  `text_no_id` int(11) NOT NULL,
  `text_no_name` varchar(255) NOT NULL,
  `text_no_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `text_no`
--

INSERT INTO `text_no` (`text_no_id`, `text_no_name`, `text_no_created_at`) VALUES
(1, '40', '2023-06-13 15:40:05'),
(2, '4', '2023-06-13 15:40:05'),
(3, '44', '2023-06-13 15:40:05'),
(4, '8', '2023-06-13 15:40:05'),
(5, '12', '2023-06-13 15:40:05'),
(6, '16', '2023-06-13 15:40:05'),
(7, '20', '2023-06-13 15:40:05'),
(8, '24', '2023-06-13 15:40:05'),
(9, '28', '2023-06-13 15:40:05'),
(10, '80', '2023-06-13 15:40:05'),
(11, '88', '2023-06-13 15:40:05'),
(12, '32', '2023-06-13 15:40:05'),
(13, '36', '2023-06-13 15:40:05'),
(14, '48', '2023-06-13 15:40:05'),
(15, '52', '2023-06-13 15:40:05'),
(16, '56', '2023-06-13 15:40:05'),
(17, '60', '2023-06-13 15:40:05'),
(18, '64', '2023-06-13 15:40:05'),
(19, '72', '2023-06-13 15:40:05'),
(20, '128', '2023-06-13 15:40:05'),
(21, '96', '2023-06-13 15:40:05'),
(22, '104', '2023-06-13 15:40:05'),
(23, '112', '2023-06-13 15:40:05'),
(24, '120', '2023-06-13 15:40:05'),
(25, '136', '2023-06-13 15:40:05'),
(26, '144', '2023-06-13 15:40:05'),
(27, '152', '2023-06-13 15:40:05'),
(28, '160', '2023-06-13 15:40:05'),
(29, '176', '2023-06-13 15:40:05'),
(30, '184', '2023-06-13 15:40:05'),
(31, '192', '2023-06-13 15:40:05'),
(32, '168', '2023-06-13 15:40:05'),
(33, '200', '2023-06-13 15:40:05');

-- --------------------------------------------------------

--
-- Table structure for table `text_paper`
--

CREATE TABLE `text_paper` (
  `text_id` int(11) NOT NULL,
  `text_name` varchar(255) NOT NULL,
  `text_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `text_paper`
--

INSERT INTO `text_paper` (`text_id`, `text_name`, `text_created_at`) VALUES
(1, 'Woodfree 80 gsm', '2023-06-12 14:32:39'),
(2, 'Woodfree 100 gsm', '2023-06-12 14:32:39'),
(3, 'Woodfree 120 gsm', '2023-06-12 14:32:39'),
(4, 'Gloss Art/Matt Art 105 gsm', '2023-06-12 14:32:39'),
(5, 'Gloss Art/Matt Art 128 gsm', '2023-06-12 14:32:39'),
(6, 'Gloss Art/Matt Art 157 gsm', '2023-06-12 14:32:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `fullname` text NOT NULL,
  `email` text NOT NULL,
  `level` enum('Administrator','User') NOT NULL DEFAULT 'User',
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `fullname`, `email`, `level`, `status`, `created_at`) VALUES
(1, 'admin', '$2b$12$bkgPnr8sf8J1YQy/BcwxEuQ1eeETvVsu7gxS4GvDZpYPmFhuXIwKO', 'Administrator', 'admin@noreply.co.th', 'Administrator', 'Active', '2023-05-31 08:02:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `cover_paper`
--
ALTER TABLE `cover_paper`
  ADD PRIMARY KEY (`cp_id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `saddle_stitch`
--
ALTER TABLE `saddle_stitch`
  ADD PRIMARY KEY (`sadd_id`);

--
-- Indexes for table `text_no`
--
ALTER TABLE `text_no`
  ADD PRIMARY KEY (`text_no_id`);

--
-- Indexes for table `text_paper`
--
ALTER TABLE `text_paper`
  ADD PRIMARY KEY (`text_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cover_paper`
--
ALTER TABLE `cover_paper`
  MODIFY `cp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `saddle_stitch`
--
ALTER TABLE `saddle_stitch`
  MODIFY `sadd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `text_no`
--
ALTER TABLE `text_no`
  MODIFY `text_no_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `text_paper`
--
ALTER TABLE `text_paper`
  MODIFY `text_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
