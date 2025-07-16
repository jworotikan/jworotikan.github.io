<?php
require 'conndb.php';

if (isset($_POST['submitBtn'])) {
    $usrID = $db_conn->real_escape_string($_POST['usrID']);

    $firstCek = $db_conn->query("SELECT * FROM dbSLEAnsw where userId = '$usrID'");

    // if ($firstCek->num_rows > 1){
    //     $sqlReset = "DELETE FROM dbSLEAnsw WHERE userId = '$usrId'";
    //     $resetAnsw = $db_conn->query("$sqlReset");
    //     }

        for($i = 1; $i<13; $i++){
            if (isset($_POST['q'.$i])) {
              $getAsw = $db_conn->real_escape_string($_POST['q'.$i]);
              $getNumbCol = $db_conn->query("SELECT * FROM dbSLEfektifAnsw where id = '$getAsw'");
              $dataNumbCol = $getNumbCol->fetch_assoc();
                $leftCol = $dataNumbCol['leftOpt'];
                $rightCol = $dataNumbCol['rightOpt'];
    
              $sqlAnswr = "INSERT INTO dbSLEAnsw (userId, qstNumb,theAsw, leftAsw, rightAsw ) VALUES ('$usrID', '$i','$getAsw', '$leftCol', '$rightCol')";
              $insertAnsw = $db_conn->query("$sqlAnswr");
            } else {
              $getAsw ='0';
            }
          }
  
          $cekAnsw = $db_conn->query("SELECT * FROM dbSLEAnsw where userId = '$usrID'"); 

          if ($cekAnsw->num_rows < 12){
       
            echo "<script>alert('Maaf, Jawaban anda belum lengkap, silahkan ulangi');location.href='../home.php?usr=$usrID&p=qst'</script>";
        
          } else {
 
           
             echo "<script>location.href='../home.php?usr=$usrID&p=res'</script>";
           
            
          
          }
}
