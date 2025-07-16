<div class="content">
    <div class="container">
        <div class="row">

            <div class="col-md-12">

                <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h5 class="card-title m-0">Jawab Pertanyaan Di Bawah Ini</h5>
                    </div>
                    <div class="card-body">
                        <form action="cnf/actAsw.php" method="POST">
                            <input type="hidden" name="usrID" value="<?=$usrID;?>">
                            <?php
                            for ($i = 1; $i < 13; $i++) {
                                $getDataQst = $db_conn->query("SELECT * FROM dbSLEfektifQst where id = $i ORDER BY id ASC");
                                while ($dataQst = $getDataQst->fetch_array()) {
                                    $qstNumb = $dataQst['id'];
                            ?>
                                    <p><b><?= $dataQst['id'] . '. ' . $dataQst['qstTxt'] ?></b></p>

                                    <div class="form-group row">
                                        <?php
                                        $getDataAnsw = $db_conn->query("SELECT * FROM dbSLEfektifAnsw where qstNumb = $qstNumb ORDER BY id ASC");
                                        while ($dataAnsw = $getDataAnsw->fetch_array()) {
                                        ?>
                                            <div class="form-check col-md-3">
                                                <input class="form-check-input" type="radio" name="q<?= $i; ?>" value="<?= $dataAnsw['id']; ?>">
                                                <label class="form-check-label"><?= $dataAnsw['txtAnsw']; ?></label>
                                            </div>

                                        <?php } ?>

                                    </div>
                                    <hr>
                            <?php
                                }
                            }
                            ?>
                            <button class="btn btn-primary" name="submitBtn" type="input"> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>