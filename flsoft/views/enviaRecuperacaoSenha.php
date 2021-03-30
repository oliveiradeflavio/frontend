<?php
if (isset($_POST['btnRecuperacaoSenha'])){

$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$email = $_POST['email'];

//formantando mensagem que será enviada ao email
$mensagem.= 'Recuperação de Senha FLSoft<br><br>';
$mensagem.='<b>Nome: </b>'.$nome.'<br>';
$mensagem.='<b>CPF:</b> '.$cpf.'<br>';
$mensagem.='<b>E-Mail:</b> '.$email.'<br>';

// abaixo as requisições do arquivo phpmailer
require("phpmailer/src/PHPMailer.php");
require("phpmailer/src/SMTP.php");
require("phpmailer/src/Exception.php");

// chamando a função do phpmailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP(); // Não modifique
$mail->Host       = 'smtp.gmail.com';  // SEU HOST (HOSPEDAGEM) - nesse caso deixei parao gmail
$mail->SMTPAuth   = true;                        // Manter em true
$mail->Username   = 'emaildousuario@gmail.com';   //SEU USUÁRIO DE EMAIL
$mail->Password   = 'senha';                   //SUA SENHA DO EMAIL SMTP password
$mail->SMTPSecure = 'ssl';    //TLS OU SSL-VERIFICAR COM A HOSPEDAGEM
$mail->Port       = 465;     //TCP PORT, VERIFICAR COM A HOSPEDAGEM
$mail->CharSet = 'UTF-8';    //DEFINE O CHARSET UTILIZADO

//Recipients
$mail->setFrom('emaildousuario@gmail.com', 'FLSoft');  //DEVE SER O MESMO EMAIL DO USERNAME
$mail->addAddress('pessoaquevaireceberoemail@email.com');     // QUAL EMAIL RECEBERÁ A MENSAGEM!
// $mail->addAddress('ellen@example.com');    // VOCÊ pode incluir quantos receptores quiser
$mail->addReplyTo($email, $nome);  //AQUI SERA O EMAIL PARA O QUAL SERA RESPONDIDO
// $mail->addCC('cc@example.com'); //ADICIONANDO CC
// $mail->addBCC('bcc@example.com'); //ADICIONANDO BCC

// Content
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Solicitação de Recuperação de Senha FLSoft'; //ASSUNTO
$mail->Body    = $mensagem;  //CORPO DA MENSAGEM
$mail->AltBody = $mensagem;  //CORPO DA MENSAGEM EM FORMA ALT

// $mail->send();
if(!$mail->Send()) {
        echo "<script>alert('Erro ao enviar o E-Mail');window.location.assign('enviaRecuperacaoSenha.php');</script>";

}else{
        echo "<script>alert('E-Mail enviado com sucesso!');window.location.assign('enviaRecuperacaoSenha.php');</script>";

 }
 header('Location: esqueciSenha.html');
die;
}
?>