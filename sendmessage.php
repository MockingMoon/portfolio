<?php
$dest    = 'claireandrea.caro@gmail.com';    
 
if(!$_POST['email'])
    echo 'Vous avez oubli&eacute; votre e-mail';
elseif(!$_POST['yourproject']){
    $_POST['yourproject'] = 'Votre message ici';
    echo 'Y\'en a marre des messages vides !';
}
elseif($_POST['email'] && $_POST['yourproject']){
    $_POST   = array_map('htmlspecialchars', $_POST);
    $from    = 'From: '.$_POST['email']."\r\n";
    $objet   = 'Vous avez un nouveau message';
    if(!preg_match('!^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,4}$!',$_POST['email']))
        echo 'Votre e-mail n\'est pas valide';
    else{
        mail($dest, $objet, $_POST['yourproject'], $from);
        # echo 'Message envoy&eacute; au webmaster';
        header('Location: index.html#contact');
    }
}