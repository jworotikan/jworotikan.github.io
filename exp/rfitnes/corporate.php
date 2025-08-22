<!--=== Breadcrumbs v3 ===-->
<div class="breadcrumbs-v3 img-v1-bg2">
    <div class="container text-center">

        <h1 class="titlecorporate">YOUR BEST WELLNESS EXPERIENCE</h1>
    </div>
    <!--/end container-->
</div>
<!--=== End Breadcrumbs v3 ===-->
<div class="container content-sm">
    <div class="text-center margin-bottom-50">
        <!-- <h2 class="title-v2 title-center"></h2> -->
        <p class="space-lg-hor" style="font-size:20px">R Fitness delivers a variety of movement based social activities
            at
            work;<br>
            Designed
            for
            people of
            any fitness levels in the forms of inclusive, entertaining and motivating workplace experiences.
        </p>
    </div>

    <div class="row md-margin-bottom-40">
        <div class="col-sm-6 margin-bottom-40">
            <div class="thumbnails-v1">
                <div class="thumbnail-img">
                    <img class="img-responsive" src="assets/img/corporate/atstudio.jpg" alt="">
                </div>
                <div class="caption text-center">
                    <h3><b><a href="#">At Studio</a></b></h3>
                    <p>Complete R Fitness
                        experience with all our
                        technology & ammenities.</p>
                    <!-- <p><a class="read-more" href="#">See More</a></p> -->
                </div>
            </div>
        </div>

        <div class="col-sm-6">
            <div class="thumbnails-v1">
                <div class="thumbnail-img">
                    <img class="img-responsive" src="assets/img/corporate/atoffice.jpg" alt="">
                </div>
                <div class="caption text-center">
                    <h3><b><a href="#">At Office</a></b></h3>
                    <p>Quality wellness
                        experience at the
                        comfort of your office.</p>
                    <!-- <p><a class="read-more" href="#">See More</a></p> -->
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 margin-bottom-40">
            <div class="responsive-video">

                <iframe src="assets/img/corporate/Corporate Class Video (Website).mp4" frameborder="0"
                    allowfullscreen="" width="100%"></iframe>
            </div>
        </div>
        <div class="col-md-12 text-center">
            <a href="https://drive.google.com/file/d/1vJDvZzR_jCwzbNpSxZvrYEoN5hu42cDs/view?usp=sharing">
                <button class="btn btn-u rounded-3x" style="font-size: 24px;">FIND OUT MORE</button>
            </a>
        </div>
    </div>

</div>

<div class="parallax-quote parallaxBg" style="background-position: 50% 16px;">
    <div class="container">
        <div class="parallax-quote-in">
            <p>Corporate programs at R Fitness are <span class="color-green">DESIGNED to create a safe
                    space for employees to exchange energy in a non-work format</span>,
                targeted to improve overall team dynamics and productivity.</p>
            <small>- ADHITYA LESMANA (Chief Executive Officer) -</small>
        </div>
    </div>
</div>



<div class="container content job-partners">
    <div class="title-box-v2">
        <h2>OUR <span class="color-green">CLIENTS</span></h2>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p> -->
    </div>

        <ul class="list-inline our-clients" id="effect-2">
        <?php
        // ambil data dari JSON, bukan database
        $clients = json_decode(file_get_contents("assets/data/clients.json"), true);

        foreach ($clients as $dtCli) {
            $cliCode = $dtCli['cliCode'];
            $cliName = $dtCli['cliName'];
            $cliPathLogo = $dtCli['cliLogo'];
        ?>
            <li>
                <figure>
                    <a href="index.php?p=clientgallery&cli=<?= $cliCode ?>">
                        <img src="assets/img/corporate/logo-corp/<?= $cliPathLogo ?>" alt="">
                        <div class="img-hover">
                            <h4><?= $cliName ?></h4>
                        </div>
                    </a>
                </figure>
            </li>
        <?php } ?>
    </ul>

</div>