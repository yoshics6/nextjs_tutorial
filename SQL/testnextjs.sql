-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2023 at 12:42 PM
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
-- Table structure for table `cutting_sheet`
--

CREATE TABLE `cutting_sheet` (
  `cutt_id` int(11) NOT NULL,
  `cutt_type` varchar(255) NOT NULL,
  `cutt_finished_size` enum('A4','A5','B4','B5') NOT NULL,
  `cutt_page` enum('1','2') NOT NULL,
  `cutt_cover_paper` enum('Art Card 210 gsm','Woodfree 80 gsm','Art Card 190 gsm','Art Card 230 gsm','Woodfree 100 gsm','Woodfree 120 gsm','White Card  120 gsm','White Card 150 gsm','Gloss Art/Matt Art 105 gsm','Gloss Art/Matt Art 128 gsm','Gloss Art/Matt Art 157 gsm','Art Card 260 gsm','Whitecard 150 gsm','Whitecard 210 gsm','Whitecard 240 gsm','Art Card 310 gsm','Art Card 350 gsm') NOT NULL,
  `cutt_printing` enum('1/0C','1/1C','4/0C','4/4C') NOT NULL,
  `cutt_coating` enum('No coating','PVC','Varnish') NOT NULL,
  `cutt_1000` float NOT NULL,
  `cutt_2000` float NOT NULL,
  `cutt_3000` float NOT NULL,
  `cutt_4000` float NOT NULL,
  `cutt_5000` float NOT NULL,
  `cutt_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `folding`
--

CREATE TABLE `folding` (
  `fold_id` int(11) NOT NULL,
  `fold_type` varchar(255) NOT NULL,
  `fold_finished_size` enum('A4','A5','B4','B5') NOT NULL,
  `fold_open_size` enum('630 x 297 mm.','840 x 297 mm.','A2','A3','A4','B2','B3','B4') NOT NULL,
  `fold_column` enum('1 Fold 2 Column','2 Fold 3 Column','2 Fold 4 Column','3 Fold 4 Column','3 Fold 8 Column') NOT NULL,
  `fold_page` enum('4','6','8','16') NOT NULL,
  `fold_cover_paper` enum('Art Card 210 gsm','Woodfree 80 gsm','Art Card 190 gsm','Art Card 230 gsm','Woodfree 100 gsm','Woodfree 120 gsm','White Card  120 gsm','White Card 150 gsm','Gloss Art/Matt Art 105 gsm','Gloss Art/Matt Art 128 gsm','Gloss Art/Matt Art 157 gsm','Art Card 260 gsm','Whitecard 150 gsm','Whitecard 210 gsm','Whitecard 240 gsm','Art Card 310 gsm','Art Card 350 gsm') NOT NULL,
  `fold_printing` enum('1/0C','1/1C','4/0C','4/4C') NOT NULL,
  `fold_coating` enum('No coating','PVC','Varnish') NOT NULL,
  `fold_1000` float NOT NULL,
  `fold_2000` float NOT NULL,
  `fold_3000` float NOT NULL,
  `fold_4000` float NOT NULL,
  `fold_5000` float NOT NULL,
  `fold_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `folding`
--

INSERT INTO `folding` (`fold_id`, `fold_type`, `fold_finished_size`, `fold_open_size`, `fold_column`, `fold_page`, `fold_cover_paper`, `fold_printing`, `fold_coating`, `fold_1000`, `fold_2000`, `fold_3000`, `fold_4000`, `fold_5000`, `fold_created_at`) VALUES
(1, 'Folding', 'A5', 'A4', '1 Fold 2 Column', '4', 'Woodfree 80 gsm', '4/4C', 'No coating', 100, 200.52, 364, 435, 8.2, '2023-06-21 18:22:11'),
(2, 'Folding', 'A5', 'A4', '1 Fold 2 Column', '4', 'Woodfree 100 gsm', '4/4C', 'No coating', 5345, 345345000, 45345, 345, 0.9, '2023-06-21 18:22:11');

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
-- Table structure for table `perfect_binding`
--

CREATE TABLE `perfect_binding` (
  `perf_id` int(11) NOT NULL,
  `perf_type` varchar(255) NOT NULL,
  `perf_finished_size` enum('A4','B5') NOT NULL,
  `perf_cover` enum('4') NOT NULL,
  `perf_text` enum('4','8','12','16','20','24','28','32','36','40','44','48','52','56','60','64','72','80','88','96','104','112','120','128','136','144','152','160','168','176','184','192','200') NOT NULL,
  `perf_cover_paper` enum('Art Card 210 gsm','Woodfree 80 gsm','Art Card 190 gsm','Art Card 230 gsm','Woodfree 100 gsm','Woodfree 120 gsm','White Card  120 gsm','White Card 150 gsm','Gloss Art/Matt Art 105 gsm','Gloss Art/Matt Art 128 gsm','Gloss Art/Matt Art 157 gsm','Art Card 260 gsm','Whitecard 150 gsm','Whitecard 210 gsm','Whitecard 240 gsm','Art Card 310 gsm','Art Card 350 gsm') NOT NULL,
  `perf_text_paper` enum('Woodfree 80 gsm','Woodfree 100 gsm','Woodfree 120 gsm','Gloss Art/Matt Art 105 gsm','Gloss Art/Matt Art 128 gsm','Gloss Art/Matt Art 157 gsm') NOT NULL,
  `perf_printing` enum('1/0C','1/1C','4/0C','4/4C') NOT NULL,
  `perf_cover_coating` enum('No coating','PVC','Varnish') NOT NULL,
  `perf_text_coating` enum('No coating','PVC','Varnish') NOT NULL,
  `perf_1000` float NOT NULL,
  `perf_2000` float NOT NULL,
  `perf_3000` float NOT NULL,
  `perf_4000` float NOT NULL,
  `perf_5000` float NOT NULL,
  `perf_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `perfect_binding`
--

INSERT INTO `perfect_binding` (`perf_id`, `perf_type`, `perf_finished_size`, `perf_cover`, `perf_text`, `perf_cover_paper`, `perf_text_paper`, `perf_printing`, `perf_cover_coating`, `perf_text_coating`, `perf_1000`, `perf_2000`, `perf_3000`, `perf_4000`, `perf_5000`, `perf_created_at`) VALUES
(1, 'Perfect Binding', 'A4', '4', '48', 'White Card  120 gsm', 'Woodfree 80 gsm', '4/4C', 'No coating', 'No coating', 100, 200.52, 364, 435, 8.2, '2023-06-21 10:44:58'),
(2, 'Perfect Binding', 'A4', '4', '48', 'White Card  120 gsm', 'Woodfree 80 gsm', '4/4C', 'PVC', 'No coating', 5345, 345345000, 45345, 345, 0.9, '2023-06-21 10:44:58');

-- --------------------------------------------------------

--
-- Table structure for table `printing`
--

CREATE TABLE `printing` (
  `printing_id` int(11) NOT NULL,
  `printing_name` varchar(255) NOT NULL,
  `printing_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `printing`
--

INSERT INTO `printing` (`printing_id`, `printing_name`, `printing_created_at`) VALUES
(1, '1/0C', '2023-06-14 14:43:41'),
(2, '1/1C', '2023-06-14 14:43:46'),
(3, '4/0C', '2023-06-14 14:43:52'),
(4, '4/4C', '2023-06-14 14:43:57');

-- --------------------------------------------------------

--
-- Table structure for table `saddle_stitch`
--

CREATE TABLE `saddle_stitch` (
  `sadd_id` int(11) NOT NULL,
  `sadd_type` varchar(255) NOT NULL,
  `sadd_finished_size` enum('A4','B5') NOT NULL,
  `sadd_cover` enum('4') NOT NULL,
  `sadd_text` enum('4','8','12','16','20','24','28','32','36','40','44','48','52','56','60','64','72','80','88','96','104','112','120','128','136','144','152','160','168','176','184','192','200') NOT NULL,
  `sadd_cover_paper` enum('Art Card 210 gsm','Woodfree 80 gsm','Art Card 190 gsm','Art Card 230 gsm','Woodfree 100 gsm','Woodfree 120 gsm','White Card  120 gsm','White Card 150 gsm','Gloss Art/Matt Art 105 gsm','Gloss Art/Matt Art 128 gsm','Gloss Art/Matt Art 157 gsm','Art Card 260 gsm','Whitecard 150 gsm','Whitecard 210 gsm','Whitecard 240 gsm','Art Card 310 gsm','Art Card 350 gsm') NOT NULL,
  `sadd_text_paper` enum('Woodfree 80 gsm','Woodfree 100 gsm','Woodfree 120 gsm','Gloss Art/Matt Art 105 gsm','Gloss Art/Matt Art 128 gsm','Gloss Art/Matt Art 157 gsm') NOT NULL,
  `sadd_printing` enum('1/0C','1/1C','4/0C','4/4C') NOT NULL,
  `sadd_cover_coating` enum('No coating','PVC','Varnish') NOT NULL,
  `sadd_text_coating` enum('No coating','PVC','Varnish') NOT NULL,
  `sadd_1000` float NOT NULL,
  `sadd_2000` float NOT NULL,
  `sadd_3000` float NOT NULL,
  `sadd_4000` float NOT NULL,
  `sadd_5000` float NOT NULL,
  `sadd_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `saddle_stitch`
--

INSERT INTO `saddle_stitch` (`sadd_id`, `sadd_type`, `sadd_finished_size`, `sadd_cover`, `sadd_text`, `sadd_cover_paper`, `sadd_text_paper`, `sadd_printing`, `sadd_cover_coating`, `sadd_text_coating`, `sadd_1000`, `sadd_2000`, `sadd_3000`, `sadd_4000`, `sadd_5000`, `sadd_created_at`) VALUES
(1, 'Stitching', 'A4', '4', '4', 'Gloss Art/Matt Art 105 gsm', 'Gloss Art/Matt Art 105 gsm', '4/4C', 'No coating', 'No coating', 100, 200.52, 364, 435, 8.2, '2023-06-17 14:22:23'),
(2, 'Stitching', 'B5', '4', '4', 'Gloss Art/Matt Art 105 gsm', 'Gloss Art/Matt Art 157 gsm', '4/4C', 'Varnish', 'Varnish', 5345, 345345000, 45345, 345, 0.9, '2023-06-17 14:22:23');

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
  `reset_token` text NOT NULL,
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

INSERT INTO `users` (`user_id`, `reset_token`, `username`, `password`, `fullname`, `email`, `level`, `status`, `created_at`) VALUES
(1, '', 'admin', '$2b$12$bkgPnr8sf8J1YQy/BcwxEuQ1eeETvVsu7gxS4GvDZpYPmFhuXIwKO', 'Administrator', 'admin@noreply.co.th', 'Administrator', 'Active', '2023-05-31 08:02:01');

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
-- Indexes for table `cutting_sheet`
--
ALTER TABLE `cutting_sheet`
  ADD PRIMARY KEY (`cutt_id`);

--
-- Indexes for table `folding`
--
ALTER TABLE `folding`
  ADD PRIMARY KEY (`fold_id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `perfect_binding`
--
ALTER TABLE `perfect_binding`
  ADD PRIMARY KEY (`perf_id`);

--
-- Indexes for table `printing`
--
ALTER TABLE `printing`
  ADD PRIMARY KEY (`printing_id`);

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
-- AUTO_INCREMENT for table `cutting_sheet`
--
ALTER TABLE `cutting_sheet`
  MODIFY `cutt_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `folding`
--
ALTER TABLE `folding`
  MODIFY `fold_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `perfect_binding`
--
ALTER TABLE `perfect_binding`
  MODIFY `perf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `printing`
--
ALTER TABLE `printing`
  MODIFY `printing_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `saddle_stitch`
--
ALTER TABLE `saddle_stitch`
  MODIFY `sadd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
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
