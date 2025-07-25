<?php
require 'cnf/conndb.php';
?>

<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>Result</title>

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="../dist/css/adminlte.min.css">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>

<body class="hold-transition layout-top-nav">
    <div class="wrapper">

        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
            <div class="container">
                <a href="../index3.html" class="navbar-brand">
                    <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                    <!-- <span class="brand-text font-weight-light">AdminLTE 3</span> -->
                </a>


            </div>
        </nav>
        <!-- /.navbar -->

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">SITUATIONAL LEADERSHIP</h1>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container">
                    <div class="row">

                        <!-- /.col-md-6 -->
                        <div class="col-lg-12">


                            <div class="card card-primary card-outline">
                                <div class="card-header">
                                    <h5 class="card-title m-0">Result</h5>
                                </div>
                                <div class="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="font-size:16px" class="text-center">Nama</th>
                                                <th style="font-size:16px" class="text-center">Directing</th>
                                                <th style="font-size:16px" class="text-center">Coaching</th>
                                                <th style="font-size:16px" class="text-center">Conseling</th>
                                                <th style="font-size:16px" class="text-center">Delegating</th>
                                                <th style="font-size:16px" class="text-center">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            $getResult = $db_conn->query("SELECT * FROM vwresultSLE where usrStatus = '1'");
                                            while ($dtResult = $getResult->fetch_array()) {
                                                $namaUser = $dtResult['userName'];
                                                $l1 = $dtResult['l1'];
                                                $l2 = $dtResult['l2'];
                                                $l3 = $dtResult['l3'];
                                                $l4 = $dtResult['l4'];
                                                $rightTotal = ($dtResult['r1'] * -2) + ($dtResult['r2'] * -1) + ($dtResult['r3'] * 1) + ($dtResult['r4'] * 2);
                                            ?>
                                                <tr>
                                                    <td style="font-size:16px" class="text-center"><?= $namaUser; ?></td>
                                                    <td style="font-size:16px" class="text-center"><?= $l1; ?></td>
                                                    <td style="font-size:16px" class="text-center"><?= $l2; ?></td>
                                                    <td style="font-size:16px" class="text-center"><?= $l3; ?></td>
                                                    <td style="font-size:16px" class="text-center"><?= $l4; ?></td>
                                                    <td style="font-size:16px" class="text-center"><?= $rightTotal; ?></td>
                                                </tr>
                                            <?php } ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- /.col-md-6 -->
                    </div>
                    <!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

     

        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
            <div class="float-right d-none d-sm-inline">
                Situational Leadership
            </div>
            <!-- Default to the left -->
            <strong>Copyright &copy; <?= date('Y')?> </strong> All rights reserved.
        </footer>
    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED SCRIPTS -->

    <!-- jQuery -->
    <script src="../plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE App -->
    <script src="../dist/js/adminlte.min.js"></script>
</body>

</html>