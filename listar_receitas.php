<?php
header("Content-type: application/json; charset=utf-8");
//Conexão com o banco de dados

include("inc.conexao.php");
mysqli_query($conexao, "SET NAMES 'utf8';");

// if(!$conexao) {
// 	echo "Não foi possível conectar ao banco de dados";
// } else {
// 	echo "Conexão OK";
// }

$filtro = NULL;
$id = NULL;
$json = array();
$json['status'] = FALSE;
$json['dados'] = array();

if(isset($_GET['id'])) {
	$id = $_GET['id'];
}

if(!isset($_GET['filtro']) || $_GET['filtro'] == "ultimas") {

	$json['status'] = TRUE;
	$query = "SELECT
				r.id,
				r.titulo,
				u.nome 	as 'autor',
				c.titulo	as 'categoria',
				IFNULL(ROUND(AVG(ur.nota),1),0)	as 'media',
				IFNULL(SUM(ur.gostou),0) 		as 'gostou',
				IFNULL(SUM(ur.favorito),0) 	as 'favorita'
				FROM
				receita r

				INNER JOIN usuario u
				ON r.email = u.email

				INNER JOIN categoria c
				ON r.categoria_id = c.id

				LEFT JOIN usuario_receita ur
				ON r.id = ur.receita_id

				GROUP BY r.id

				ORDER BY r.id DESC";
} else {

	$filtro = $_GET['filtro'];

	if($filtro == "receita") {

    if($id == NULL) {
      $json['mensagem'] = "Nenhuma receita foi selecionada";
    } else {
      $json['status'] = TRUE;
      $query = "SELECT
            r.id,
            r.titulo,
            u.nome  as 'autor',
            c.titulo  as 'categoria',
            IFNULL(ROUND(AVG(ur.nota),1),0) as 'media',
            IFNULL(SUM(ur.gostou),0)    as 'gostou',
            IFNULL(SUM(ur.favorito),0)  as 'favorita'
          FROM
            receita r

          INNER JOIN usuario u
            ON r.email = u.email

          INNER JOIN categoria c
            ON r.categoria_id = c.id

          LEFT JOIN usuario_receita ur
            ON r.id = ur.receita_id

          WHERE r.id = $id

          GROUP BY r.id

          ORDER BY media DESC, gostou DESC, favorita DESC";

    }
  }else if($filtro == "categoria") {

		if($id == NULL) {
			$json['mensagem'] = "Nenhuma categoria foi selecionada";
		} else {
			$json['status'] = TRUE;
			$query = "SELECT
						r.id,
						r.titulo,
						u.nome 	as 'autor',
						c.titulo	as 'categoria',
						IFNULL(ROUND(AVG(ur.nota),1),0)	as 'media',
						IFNULL(SUM(ur.gostou),0) 		as 'gostou',
						IFNULL(SUM(ur.favorito),0) 	as 'favorita'
					FROM
						receita r

					INNER JOIN usuario u
						ON r.email = u.email

					INNER JOIN categoria c
						ON r.categoria_id = c.id

					LEFT JOIN usuario_receita ur
						ON r.id = ur.receita_id

					WHERE r.categoria_id = $id

					GROUP BY r.id

					ORDER BY media DESC, gostou DESC, favorita DESC";

		}
	}else if($filtro == "usuario"){
		if($id == NULL) {
			$json['mensagem'] = "Nenhum usuario foi selecionado";
		} else {

			$json['status'] = TRUE;
			$query = "SELECT
						r.id,
						r.titulo,
						u.nome 	as 'autor',
						c.titulo	as 'categoria',
						IFNULL(ROUND(AVG(ur.nota),1),0)	as 'media',
						IFNULL(SUM(ur.gostou),0) 		as 'gostou',
						IFNULL(SUM(ur.favorito),0) 	as 'favorita'
						FROM
						receita r

						INNER JOIN usuario u
						ON r.email = u.email

						INNER JOIN categoria c
						ON r.categoria_id = c.id

						LEFT JOIN usuario_receita ur
						ON r.id = ur.receita_id

						WHERE r.email = '$id'

						GROUP BY r.id

						ORDER BY r.id DESC";

		}
	}else if($filtro == "favoritas") {
		if($id == NULL) {
			$json['mensagem'] = "Nenhuma usuario foi selecionado";
		} else {
			$json['status'] = TRUE;
			$query = "SELECT
						r.id,
						r.titulo,
						u.nome 	as 'autor',
						c.titulo	as 'categoria'

						FROM
						receita r

						INNER JOIN usuario u
						ON r.email = u.email

						INNER JOIN categoria c
						ON r.categoria_id = c.id

						RIGHT JOIN usuario_receita ur
						ON r.id = ur.receita_id

						WHERE ur.email = '$id' AND ur.favorito = 1

						ORDER BY categoria, titulo";
		}
	}
}

if($json['status'] == TRUE) {
	$resultado = mysqli_query($conexao, $query);

  if(!empty($resultado)){
  	while($receita = mysqli_fetch_object($resultado)){
  		$json['dados'][] = $receita;
  	}
  }

	if(empty($json['dados'])){
		if($filtro == 'categoria'){
			$json['mensagem'] = "Nenhuma receita cadastrada nesta categoria";
		}else if($filtro == 'usuario'){
			$json['mensagem'] = "Nenhuma receita cadastrada para este usuário";
		}else if($filtro == 'favoritas'){
			$json['mensagem'] = "Nenhuma receita foi marcada como favorita para este usuário";
		}else{
			$json['mensagem'] = "nenhum dado foi encontrado";
		}
	}

}
	echo json_encode($json);
?>
