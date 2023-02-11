-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Feb 2023 pada 01.55
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE
= "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone
= "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mevn`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `projects`
--

CREATE TABLE `projects`
(
  `id` int
(11) NOT NULL,
  `title` varchar
(255) NOT NULL,
  `image` varchar
(255) NULL,
  `description` varchar
(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `projects`
--

INSERT INTO `projects` (`
id`,
`title
`, `image`, `description`, `createdAt`, `updatedAt`) VALUES
(9, 'Project 1 update', 'A9IpUhdBbY.jpg', 'Project 1', '2023-02-07 20:23:35', '2023-02-08 00:54:06'),
(10, 'Project 2 update', 'Nyr4PR6cDB.jpg', 'Project 2', '2023-02-07 20:26:56', '2023-02-08 00:54:19'),
(11, 'Project 3', 'yV5KzplsT9.png', 'Project 3', '2023-02-07 21:09:10', '2023-02-07 21:09:10'),
(12, 'Project 4', 'SUArejn2CT.png', 'Project 4', '2023-02-07 21:24:49', '2023-02-07 21:24:49'),
(13, 'Project 5', 'knQ0nMFiuw.jpg', 'Project 5', '2023-02-07 21:24:57', '2023-02-07 21:24:57'),
(14, 'Project 6', 'a9eQ9iPzmF.png', 'Project 6', '2023-02-07 21:25:04', '2023-02-07 21:25:04'),
(15, 'Project 7', 'fSu39r4kQq.png', 'Project 7', '2023-02-07 21:25:16', '2023-02-07 21:25:16'),
(16, 'Project 8', 'bwQwYJ7Z0Y.jpg', 'Project 8', '2023-02-07 21:25:30', '2023-02-07 21:25:30'),
(17, 'Project 9', 'JZyXLgLyr5.jpg', 'Project 9', '2023-02-07 21:25:46', '2023-02-07 21:25:46'),
(18, 'Project 10', 'uydhhT7f7I.jpg', 'Project 10', '2023-02-07 21:25:55', '2023-02-07 21:25:55'),
(19, 'Project 11', 'ci2UfNGeLs.png', 'Project 11', '2023-02-07 21:26:06', '2023-02-07 21:26:06'),
(20, 'Project 12', 'qT1nLxAeKV.jpg', 'Project 12', '2023-02-07 21:26:17', '2023-02-07 21:26:17'),
(21, 'Project 13', '6f7vYi6pmn.jpeg', 'Project 13', '2023-02-07 21:26:27', '2023-02-07 21:26:27'),
(22, 'project 14', 'MXg2IsdbJx.jpg', 'project 14', '2023-02-08 00:55:01', '2023-02-08 00:55:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users`
(
  `id` int
(11) NOT NULL,
  `username` varchar
(255) NOT NULL,
  `password` varchar
(255) NOT NULL,
  `token` varchar
(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`
id`,
`username
`, `password`, `token`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTY3NTgxNTM4N30.aCOe8pqBQ9Fu4PxM0BZvV-CXhx5cUQp-9Z28fWEUgDA', '2023-02-07 18:31:17', '2023-02-08 00:16:27');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `projects`
--
ALTER TABLE `projects`
ADD PRIMARY KEY
(`id`),
ADD UNIQUE KEY `title`
(`title`),
ADD UNIQUE KEY `image`
(`image`),
ADD UNIQUE KEY `description`
(`description`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
ADD PRIMARY KEY
(`id`),
ADD UNIQUE KEY `username`
(`username`),
ADD UNIQUE KEY `password`
(`password`),
ADD UNIQUE KEY `token`
(`token`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int
(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int
(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
