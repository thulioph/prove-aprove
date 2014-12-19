-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 18-Dez-2014 às 21:32
-- Versão do servidor: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `prove-teste`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE IF NOT EXISTS `categoria` (
`id` smallint(6) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id`, `titulo`) VALUES
(1, 'Saladas'),
(2, 'Sopas'),
(3, 'Massas'),
(4, 'Bebidas'),
(5, 'Bolos'),
(6, 'Carnes'),
(7, 'Aves'),
(8, 'Peixes e Frutos do Mar'),
(9, 'Doces'),
(10, 'Lanches'),
(11, 'Prato Único'),
(12, 'Especiais');

-- --------------------------------------------------------

--
-- Estrutura da tabela `ingrediente`
--

CREATE TABLE IF NOT EXISTS `ingrediente` (
`id` smallint(6) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Extraindo dados da tabela `ingrediente`
--

INSERT INTO `ingrediente` (`id`, `titulo`) VALUES
(1, 'Achocolatado'),
(2, 'Leite'),
(3, 'Carne Moída'),
(4, 'Batata Palha'),
(5, 'Ovo'),
(6, 'Açucar'),
(7, 'Agua'),
(8, 'Banana'),
(9, 'Cerveja'),
(10, 'Picanha'),
(11, 'Cebola'),
(12, 'Uva'),
(13, 'Oleo'),
(14, 'Sal');

-- --------------------------------------------------------

--
-- Estrutura da tabela `receita`
--

CREATE TABLE IF NOT EXISTS `receita` (
`id` smallint(6) NOT NULL,
  `email` varchar(50) NOT NULL,
  `categoria_id` smallint(6) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `modoDePreparo` text NOT NULL,
  `tempoDePreparo` time NOT NULL,
  `rendimento` varchar(50) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Extraindo dados da tabela `receita`
--

INSERT INTO `receita` (`id`, `email`, `categoria_id`, `titulo`, `modoDePreparo`, `tempoDePreparo`, `rendimento`) VALUES
(1, 'leandro@gmail.com', 12, 'Ovo frito especial', 'Pegue um ovo fresco, quebre a casca e asse em uma assadeira adicionando oleo', '00:05:00', '01 porção'),
(2, 'rosalva@gmail.com', 6, 'Costela Bovina a moda do chefe', 'Pegue a costela bovina, coloque numa assadeira e asse em fogo brando tempere a gosto.', '01:00:00', '01 porção'),
(3, 'rosalva@gmail.com', 6, 'Picanha na cerveja preta', 'Em uma churrasqueira pegue uma picanha gorda, deixe assar, tempere com cerveja e sirva', '00:30:00', '01 porção'),
(4, 'rosalva@gmail.com', 6, 'Fricassê de carne moida a moda do chefe', 'Tempere a seu gosto e cozinhe a carne moída, após cozida separe e sirva', '00:30:00', '01 porção'),
(5, 'rosalva@gmail.com', 4, 'Bebida forte', 'Coloque o curaçau com vodka e cidra', '01:00:00', '1 pessoa'),
(6, 'leandro@gmail.com', 4, 'Achocolatado Batido', 'Adicione achocolatado e bata no liquidificador', '00:05:00', '01 porção'),
(7, 'leandro@gmail.com', 4, 'Vitamina de Banana', 'Adicione bana e leite, bata no liquidificador', '00:05:00', '02 porções'),
(8, 'leandro@gmail.com', 4, 'Suco de Abacaxi', 'Adicione abacaxi com agua e bata no liquidificador', '00:05:00', '10 porções'),
(9, 'leandro@gmail.com', 4, 'Suco de Uva', 'Lave bem as uvas e bata num liquidificador', '00:05:00', '10 porções');

-- --------------------------------------------------------

--
-- Estrutura da tabela `receita_ingrediente`
--

CREATE TABLE IF NOT EXISTS `receita_ingrediente` (
  `receita_id` smallint(6) NOT NULL,
  `ingrediente_id` smallint(6) NOT NULL,
  `quantidade` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `receita_ingrediente`
--

INSERT INTO `receita_ingrediente` (`receita_id`, `ingrediente_id`, `quantidade`) VALUES
(1, 5, '1'),
(2, 3, '1'),
(3, 10, '1'),
(4, 3, '1'),
(5, 7, '1'),
(6, 2, '1'),
(7, 8, '1'),
(8, 7, '1'),
(9, 12, '1'),
(9, 7, '1'),
(1, 2, '2'),
(1, 3, '1'),
(2, 3, '2'),
(2, 4, '1'),
(3, 5, '2'),
(3, 6, '1');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `email` varchar(50) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `Nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`email`, `senha`, `Nome`) VALUES
('leandro@gmail.com', '123456', 'Leandro Rodrigo'),
('rosalva@gmail.com', '123456', 'Rosalva Freire');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario_receita`
--

CREATE TABLE IF NOT EXISTS `usuario_receita` (
  `email` varchar(255) NOT NULL,
  `receita_id` smallint(6) NOT NULL,
  `favorito` tinyint(1) DEFAULT NULL,
  `gostou` tinyint(1) DEFAULT NULL,
  `nota` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario_receita`
--

INSERT INTO `usuario_receita` (`email`, `receita_id`, `favorito`, `gostou`, `nota`) VALUES
('leandro@gmail.com', 1, 1, NULL, NULL),
('leandro@gmail.com', 2, NULL, 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingrediente`
--
ALTER TABLE `ingrediente`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `receita`
--
ALTER TABLE `receita`
 ADD PRIMARY KEY (`id`), ADD KEY `email` (`email`), ADD KEY `categoria_id` (`categoria_id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
 ADD PRIMARY KEY (`email`);

--
-- Indexes for table `usuario_receita`
--
ALTER TABLE `usuario_receita`
 ADD KEY `email` (`email`), ADD KEY `receita_id` (`receita_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `ingrediente`
--
ALTER TABLE `ingrediente`
MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `receita`
--
ALTER TABLE `receita`
MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `receita`
--
ALTER TABLE `receita`
ADD CONSTRAINT `receita_ibfk_1` FOREIGN KEY (`email`) REFERENCES `usuario` (`email`),
ADD CONSTRAINT `receita_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
