-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 25, 2020 lúc 06:35 PM
-- Phiên bản máy phục vụ: 10.4.13-MariaDB
-- Phiên bản PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `homestaymanager`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('initUser.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('CKOUXsJAhOTw4Cgb8eK2zOT5PAZ7WhZ6', 1606362501, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":2,\"email\":\"tqt@gmail.com\",\"username\":\"congacon\",\"password\":\"$2b$10$ivb63YuNXrjs7NzVmsw4x.MSzwfKFM8k/qjuWd01fkt8K8/Oyv.nC\",\"role\":\"customer\",\"created_at\":\"2020-11-25T03:25:53.000Z\",\"updated_at\":\"2020-11-25T03:25:53.000Z\"}}'),
('l1rGltawWLHAiMch0-DSvWdoznYm5-iS', 1606383528, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":2,\"email\":\"tqt@gmail.com\",\"username\":\"congacon\",\"password\":\"$2b$10$ivb63YuNXrjs7NzVmsw4x.MSzwfKFM8k/qjuWd01fkt8K8/Oyv.nC\",\"role\":\"customer\",\"created_at\":\"2020-11-25T03:25:53.000Z\",\"updated_at\":\"2020-11-25T03:25:53.000Z\"}}');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `role` enum('admin','customer') NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `role`, `password`, `created_at`, `updated_at`) VALUES
(1, 'tqt1@gmail.com', 'ta quoc tran', 'customer', '123456', '2020-11-24 21:51:50.219', '2020-11-24 21:51:50.219'),
(2, 'tqt@gmail.com', 'congacon', 'customer', '$2b$10$ivb63YuNXrjs7NzVmsw4x.MSzwfKFM8k/qjuWd01fkt8K8/Oyv.nC', '2020-11-25 03:25:53.000', '2020-11-25 03:25:53.000'),
(3, 'aabb@gmail.com', 'chimcon', 'customer', '$2b$10$US83qtVWOFGF6tO29RW84.ee5T2zWOqq1zh/5vEaa5SI4f/gaFBEa', '2020-11-25 03:29:24.000', '2020-11-25 03:29:24.000'),
(4, 'aabbcc@gmail.com', 'chimcon', 'customer', '$2b$10$zxALA3fGw7.39ZdfJZkwH.MC4mBycFPSEYkzPIQpBw0p4RbyTyc3C', '2020-11-25 03:31:49.000', '2020-11-25 03:31:49.000'),
(5, 'aabbcccc@gmail.com', 'chimcon', 'customer', '$2b$10$cPaPbPxpUuki2BpIwbDfUuac6k87tcACLwKu4IMyV7JYjVAu77H1.', '2020-11-25 09:35:02.000', '2020-11-25 09:35:02.000'),
(6, 'aabbccc1c@gmail.com', 'chimconva', 'customer', '$2b$10$Uf5XeWojW6omVDKmMflbJuUQEDqNHof0iqtXS1c/eufrp5yuxcvzy', '2020-11-25 09:38:09.000', '2020-11-25 09:38:09.000'),
(7, 'vccv@gmail.com', 'chimconva', 'customer', '$2b$10$yRpGdxM/TMexuk07O8pj.eLsAXgFFaMMVToAmsqTRP4xoCaC7YF2i', '2020-11-25 09:38:48.000', '2020-11-25 09:38:48.000'),
(8, 'vccvcc@gmail.com', 'chimconva', 'customer', '$2b$10$NN7wkzg2PPTcY0pu.O0j8ewUsUNI.Un878EGRabVDCktydCYjadDa', '2020-11-25 10:50:23.000', '2020-11-25 10:50:23.000'),
(9, 'vvvv@gmail.com', 'chimconva', 'customer', '$2b$10$0xeGrcWRxgrmp61Bg/ocpeWcAxRFwTPDC8JadctiAwNg3HqhfBStq', '2020-11-25 10:55:35.000', '2020-11-25 10:55:35.000'),
(10, 'vvvvv@gmail.com', 'chimconva', 'customer', '$2b$10$FNW6xzvfGvMZ21tklm0aFOBbQJPpKoy6aEZpoBHN1BijaJXnVVguW', '2020-11-25 11:22:12.000', '2020-11-25 11:22:12.000'),
(11, 'vvttvvv@gmail.com', 'chimconva', 'customer', '$2b$10$CH053kM2AecpnGP5200XCedZ5ZgAM/N7rCsDAxcGtuwiCsZ7wZEtC', '2020-11-25 14:55:42.000', '2020-11-25 14:55:42.000'),
(12, 'vvttvvvvv@gmail.com', 'Tạ Quốc Trần', 'customer', '$2b$10$iYcl3jJxSKzcrrdIqOOElOzNaPF7wIntJ8/xt1ERjwC5Vy.vkXnFi', '2020-11-25 15:15:45.000', '2020-11-25 15:15:45.000'),
(13, 'vvtt@gmail.com', 'Tạ Quốc Trần', 'customer', '$2b$10$tGRXoF0o699ePZlI29.47ubLzaac6hLeIN3zGNcLXirwoISAEyCay', '2020-11-25 17:00:48.000', '2020-11-25 17:00:48.000');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
