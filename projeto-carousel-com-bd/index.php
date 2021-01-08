<?php
    include_once("conexao.php");
?>
<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Netflix Projeto</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!--bootstrap -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

  <!-- font awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

  <!-- CSS personalizado -->
  <link rel="stylesheet" href="css/estilo.css">

  <script type="text/javascript">

  function abreVideo(){
    varWindow = window.open (
      'https://www.youtube.com/embed/2KnZac176Hs',
      'pagina',
      "width=560, height=315, top=100, left=110, scrollbars=no" )
  }

  function login(){
    varWindow = window.open(
      'login.html',
      'paginaLogin',
      "width=760,height=550,top=100, scrollbars=no"
    )
  }



  </script>
  </head>
  <body>

<!-- cabeçalho -->
  <header>
    <!-- barra de navegacao-->
    <nav class="navbar navbar-expand-md navbar-light navbar-fundo" >
      <div class="container">
        <a href="index.php" class="navbar-brand">
          <img src="imagens/netflix-logo.png" alt="logo" width="200">
        </a>

       <!-- menu hamburguer -->
       <button class="navbar-toggler" data-toggle="collapse"
       data-target="#navegacao" type="button">
         <i class="fas fa-bars text-white"></i>
       </button>

       <!-- navegacao -->
       <div class="collapse navbar-collapse" id="navegacao">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link btn btn-danger btn-sm" onclick="login()">Entrar</a>
            </li>
          </ul>

       </div>
      </div>
    </nav>
  </header><!--fim cabeçalho -->

  <section id="home" class="d-flex">
    <div class="container align-self-center">
      <div class="row">
        <div class="col-md-12 capa">
            <h2>
              Filmes, séries e muito mais. Sem limites.
            </h2>
            <h3>
              Assista onde quiser. Cancele quando quiser.
        </div>
      </div>
    </div>

  </section>

<!--Home -->
<section id="filmes" class="d-flex">
  <div class="container align-self-center">
    <div class="row">
      <div class="col-md-12 capa">

        <!-- Inicio Carousel -->
        <div id="carousel-netflix" class="carousel slide" data-ride="carousel">

          <!--Inicio carousel inner -->
          <div class="carousel-inner">
            <?php

              $controle_ativo = 2;
              $result_carousel = "SELECT * FROM carrouses ORDER BY id ASC";
              $resultado_carousel = mysqli_query($conn, $result_carousel);
              while($row_carousel = mysqli_fetch_assoc($resultado_carousel)){
                  if($controle_ativo == 2){ ?>


                          <div class="carousel-item active caixa">
                            <div class="container">
                              <div class="row">
                                <div class="col-md-5">

                                    <img src="imagens/<?php echo $row_carousel['imagem_carousel']; ?>" alt="<?php echo $row_carousel['nome']; ?>">
                                    </div>


                          <div class="col-md-7">
                        <h5 class="text-white mt-5 mr-5">
                          Um jovem programador é atormentado por estranhos pesadelos nos
                          quais sempre está conectado por cabos a um imenso sistema de computadores do futuro.
                          À medida que o sonho se repete, ele começa a levantar dúvidas sobre a realidade.
                          E quando encontra os misteriosos Morpheus e Trinity, ele descobre que é vítima do Matrix,
                          um sistema inteligente e artificial que manipula a mente das pessoas e cria a ilusão de
                          um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.
                        </h5>

                          <button id="btnTrailer" onclick="abreVideo()" class="mt-5 p-2 btn btn-danger btn-lg" type="button">Assistir trailer</button>

                            </div>
                        </div>

                        </div>

                      </div>

                      <?php
                      $controle_ativo = 1;
                  }else  {?>

                    <div class="carousel-item">
                      <div class="container">
                        <div class="row">
                      <div class="col-md-5">
                        <img src="imagens/<?php echo $row_carousel['imagem_carousel']; ?>" alt="<?php echo $row_carousel['nome']; ?>">
                      </div>
                        <div class="col-md-7">

                          <?php if ($row_carousel['nome']== "Karatê Kid"){ ?>
                              <h5 class="text-white mt-5 mr-5">

                                O adolescente Daniel LaRusso se envolve com a ex-namorada do valentão
                                da escola e começa a ser atormentado por sua gangue.
                                Para sua sorte, ele conta com os ensinamentos do senhor Miyagi,
                                um mestre de karatê que o prepara para autodefesa e também para um importante campeonato.

                              </h5>
                              <button onclick="login()" class="mt-5 p-2 btn btn-danger btn-lg" type="button" name="button">Faça seu login para assistir</button>
                              <?php
                            }elseif ($row_carousel['nome']== "Senhor dos Anéis") {?>
                              <h5 class="text-white mt-5 mr-5">
                                Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel
                                mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso,
                                o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres
                                bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar
                                com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres
                                que formam a Sociedade do Anel.
                              </h5>
                              <button onclick="login()" class="mt-5 p-2 btn btn-danger btn-lg" type="button" name="button">Faça seu login para assistir</button>
                              <?php
                            }elseif ($row_carousel['nome']== "Vingadores") {?>
                              <h5 class="text-white mt-5 mr-5">
                                Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso,
                                 o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas,
                                 Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.
                              </h5>
                              <button onclick="login()" class="mt-5 p-2 btn btn-danger btn-lg" type="button" name="button">Faça seu login para assistir</button>
                              <?php
                            }
                            ?>
                      </div>
                    </div>
                  </div>
                    </div>
                    <?php

                      }

                  }

              ?>


          <!--  <div class="carousel-item">
              <p>
                <img src="imagens/vingadores.jpg" alt="">
              </p>
            </div>
          -->
          </div> <!--fim carousel inner -->
          <!-- controles -->
          <a href="#carousel-netflix" class="carousel-control-prev"
            data-slide="prev">
            <i class="fas fa-angle-left fa-3x"></i>
          </a>

          <a href="#carousel-netflix" class="carousel-control-next"
            data-slide="next">
              <i class="fas fa-angle-right fa-3x"></i>
            </a>
        </div><!--Fim carousel -->
      </div>
    </div>
  </div>
</section><!-- fim Home -->


  <!-- Optional JavaScript; choose one of the two! -->

   <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

   <!-- Option 2: jQuery, Popper.js, and Bootstrap JS
   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
   -->
  </body>
</html>
