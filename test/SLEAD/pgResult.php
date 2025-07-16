<?php
$getResult = $db_conn->query("SELECT * FROM vwresultSLE where id = '$usrID'");
$dataResult = $getResult->fetch_assoc();
$namaUser = $dataResult['userName'];
$l1 = $dataResult['l1'];
$l2 = $dataResult['l2'];
$l3 = $dataResult['l3'];
$l4 = $dataResult['l4'];
$rightTotal = ($dataResult['r1'] * -2) + ($dataResult['r2'] * -1) + ($dataResult['r3'] * 1) + ($dataResult['r4'] * 2);
?>

<div class="content">
    <div class="container">
        <div class="row">

            <div class="col-md-12">

                <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h5 class="card-title m-0">Hallo <?= $namaUser; ?>,</h5>
                    </div>
                    <div class="card-body">
                        <p>Selamat, ini adalah hasil test anda.</p>
                        <p>Hubungi fasilitator / Trainer kami, untuk mendapatkan penjelasan lebih mendalam.</p>
                        <hr>

                        <div class="row">
                            <div class="col-md-6">
                                <h3 class="card-title"><b>Analisa Gaya Kepemimpinan</b></h3>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style="font-size:16px" class="text-center">Directing</th>
                                            <th style="font-size:16px" class="text-center">Coaching</th>
                                            <th style="font-size:16px" class="text-center">Conseling</th>
                                            <th style="font-size:16px" class="text-center">Delegating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="font-size:16px" class="text-center"><?= $l1; ?></td>
                                            <td style="font-size:16px" class="text-center"><?= $l2; ?></td>
                                            <td style="font-size:16px" class="text-center"><?= $l3; ?></td>
                                            <td style="font-size:16px" class="text-center"><?= $l4; ?></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-6">
                                <h3 class="card-title"><b>Efektifitas Gaya Kepemimpinan</b></h3>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style="font-size:16px" class="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="font-size:16px" class="text-center"><?= $rightTotal; ?></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                <a href="index.php">
                <button class="btn btn-primary">Keluar</button>
                </a>
                
            </div>
            <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>