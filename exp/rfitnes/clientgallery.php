<?php
// ambil kode client dari parameter URL
$cliCD = $_GET['cliCD'] ?? '';

// load data client
$clients = json_decode(file_get_contents("assets/data/clients.json"), true);

// cari client sesuai cliCode
$dtcli = null;
foreach ($clients as $c) {
    if ($c['cliCode'] === $cliCD) {
        $dtcli = $c;
        break;
    }
}

// jika client ditemukan, ambil data
$cliID = $dtcli['id'] ?? null;
$cliName = $dtcli['cliName'] ?? 'Client Tidak Ditemukan';

// load data gallery
$galleries = json_decode(file_get_contents("assets/data/client_gallery.json"), true);
?>

<div class="container content-sm">
    <div class="text-center margin-bottom-50">
        <h2 class="title-v2 title-center"><?= $cliName ?></h2>
    </div>
    <div class="row margin-bottom-30">
        <?php
        if ($cliID) {
            foreach ($galleries as $dtGallery) {
                if ($dtGallery['cliID'] == $cliID) {
                    $galPath = $dtGallery['imgPath'];
        ?>
        <div class="col-sm-4 margin-bottom-30">
            <a href="assets/img/corporate/gallery/<?= $galPath ?>" rel="gallery1" class="fancybox img-hover-v1"
                title="<?= $cliName ?>">
                <span><img class="img-responsive" src="assets/img/corporate/gallery/<?= $galPath ?>" alt=""></span>
            </a>
        </div>
        <?php
                }
            }
        }
        ?>
    </div>
</div>
