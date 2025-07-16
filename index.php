<?php

$phone = '+6287880499699';
$message = '';

// DO NOT EDIT BELOW
$message = urlencode($message);
$message = str_replace('+', '%20', $message);
$iphone = strpos($_SERVER['HTTP_USER_AGENT'], "iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'], "Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'], "webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'], "BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'], "iPod");

// cekk jika mobile
if ($iphone || $android || $palmpre || $ipod || $berry == true) {
  $link = "whatsapp://send?phone='.$phone.'&text='.$message";
} else {
  $link = "https://web.whatsapp.com/send?phone='.$phone";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Jonathan Worotikan - My Resume</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="img/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="img/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="img/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="img/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="img/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="img/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png">
    <link rel="manifest" href="img/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="img/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/wastyle.css" rel="stylesheet">
    <style>
    .btn-u {
        border: 0;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        font-weight: 400;
        padding: 6px 13px;
        position: relative;
        background: #1763bb;
        white-space: nowrap;
        display: inline-block;
        text-decoration: none;
    }
    </style>


</head>

<body>

    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    <header id="header" class="d-flex flex-column justify-content-center">

        <nav id="navbar" class="navbar nav-menu">
            <ul>
                <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a>
                </li>
                <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a>
                </li>
                <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a>
                </li>
                <li><a href="<?php echo $link; ?>" target="_blank"><i class="bx bxl-whatsapp"></i>
                        <span>Whatsapp</span></a></li>
            </ul>
        </nav><!-- .nav-menu -->

    </header><!-- End Header -->

    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex flex-column justify-content-center">
        <div class="container" data-aos="zoom-in" data-aos-delay="100">
            <h1>Jonathan Worotikan</h1>
            <p><span class="typed" data-typed-items="Software Engineer, Programmer, Photographer"></span></p>
            <div class="social-links">
                <a href="https://www.facebook.com/jonathan.worotikan/" target="_blank" class="facebook"><i
                        class="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/jworotikan/" target="_blank" class="instagram"><i
                        class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/jworotikan" target="_blank" class="linkedin"><i
                        class="bx bxl-linkedin"></i></a>
            </div>
        </div>
    </section><!-- End Hero -->

    <main id="main">

        <!-- ======= About Section ======= -->
        <section id="about" class="about aboutTab">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>About</h2>
                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <img src="assets/img/profile-img.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Jonathan Wisnu P Worotikan</h3>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>October
                                            26th, 1986</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a
                                                href="https://jworotikan.web.id">https://jworotikan.web.id</a> </span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kota Bogor,
                                            Indonesia</span></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong>
                                        <span>(+62)878-804-99699</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong>
                                        <span>jonathan.worotikan@gmail.com</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong>
                                        <span>Available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            I work as an IT Manager and Software Engineer at a Training Consultant company. Where I am
                            required to have the ability to make both website and mobile-based applications as well as
                            an understanding of servers and networks. Creating the latest solutions for business
                            development in the digital world following current technology.
                        </p>
                        <a href="resume/jonathan-worotikan-full-2023.pdf" target="_blank"><button class="btn-u">Download
                                My
                                Resume</button></a>
                    </div>
                </div>

            </div>
        </section><!-- End About Section -->



        <!-- ======= Skills Section ======= -->
        <!--<section id="skills" class="skills section-bg" style="padding-top:0px;">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div class="row skills-content">

          <div class="col-lg-4">
            <hr>
            <div class="skills-title">
              <h4>Programing</h4>
            </div>

            <div class="progress">
              <span class="skill">HTML <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">CSS <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">PHP <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">React Native <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">NodeJS <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <hr>

            <div class="skills-title">
              <h4>Databases Architecture</h4>
            </div>

            <div class="progress">
              <span class="skill">MYSQL <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">Firebase <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <hr>
            <div class="skills-title">
              <h4>Network Architecture</h4>
            </div>
            <div class="progress">
              <span class="skill">Network Planning <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <hr>
            <div class="skills-title">
              <h4>Server Development</h4>
            </div>
            <div class="progress">
              <span class="skill">VMWare <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">Proxmox <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">AWS EC2 <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <hr>
            <div class="skills-title">
              <h4>Administrator</h4>
            </div>
            <div class="progress">
              <span class="skill">Microsoft Office (Word, Excel, Powerpoint) <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <hr>
            <div class="skills-title">
              <h4>Multimedia And Design</h4>
            </div>
            <div class="progress">
              <span class="skill">Adobe Photoshop, Illustrator, Indesign <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">Adobe Premiere <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">FLStudio <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>-->

        <!-- ======= Services Section ======= -->
        <section id="services" class="services">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>What I Do</h2>
                    <p>I am a software engineer who is able to work for the front-end and back-end. I also have the
                        ability to design and multimedia both images, video and audio.<br> I can quickly learn and
                        operate any application.</p>
                </div>

                <div class="row">

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div class="icon-box iconbox-blue">
                            <div class="icon">
                                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174">
                                    </path>
                                </svg>
                                <i class='bx bx-minus-front'></i>
                            </div>
                            <h4>Front-End</h4>
                            <p>Build and develop <b>Front-End</b> websites and applications using <b>HTML, PHP, CSS, JS
                                    and ReactNative</b> programming languages.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                        data-aos-delay="200">
                        <div class="icon-box iconbox-orange ">
                            <div class="icon">
                                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                        d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426">
                                    </path>
                                </svg>
                                <i class='bx bxs-server'></i>
                            </div>
                            <h4>Back-End</h4>
                            <p>Build and develop <b>Back-End</b> and <b>Core System</b> various applications. Familiar
                                with <b>AWS</b> and building databases using <b>MySQL</b> and <b>Firebase</b>.
                                Understand <b>NodeJS</b> and <b>RESTful APIs</b>.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in"
                        data-aos-delay="300">
                        <div class="icon-box iconbox-pink">
                            <div class="icon">
                                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                        d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781">
                                    </path>
                                </svg>
                                <i class="bx bx-tachometer"></i>
                            </div>
                            <h4>Multimedia and Design</h4>
                            <p>Able to design images for application and website UI needs, social media content and
                                other designs. Familiar with Adobe Photoshop, Adobe Illustrator, and Adobe Premiere.</p>
                        </div>
                    </div>

                    <!-- <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-yellow">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                </svg>
                <i class="bx bx-layer"></i>
              </div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-red">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                </svg>
                <i class="bx bx-slideshow"></i>
              </div>
              <h4><a href="">Dele Cardo</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-teal">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                </svg>
                <i class="bx bx-arch"></i>
              </div>
              <h4><a href="">Divera Don</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div> -->

                </div>

            </div>
        </section><!-- End Services Section -->


        <section id="resume" class="resume">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Resume</h2>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <h3 class="resume-title">Sumary</h3>
                        <div class="resume-item pb-0">
                            <h4>Jonathan Worotikan</h4>
                            <p><em>Detail-oriented IT professional with more than 10 years experience as Software
                                    Engineer, Programmer and Network Engineer. Understand various programming languages.
                                    Has built and developed various applications and websites both front-end and
                                    back-end. Skilled in operating multiple platforms, have good verbal and Non-verbal
                                    communication skills, and able to explain complex software problems in easy-to-reach
                                    terms.</em></p>
                        </div>

                        <h3 class="resume-title">Education</h3>
                        <div class="resume-item">
                            <h4>Study Law at Law Faculty</h4>
                            <h5>2009 - 2014</h5>
                            <p><em>Pakuan University, Bogor</em></p>
                        </div>

                        <h3 class="resume-title">Certification</h3>
                        <div class="resume-item">
                            <a href="https://www.dicoding.com/certificates/EYX49GYRWPDL" target="_blank">
                                <h4 style="text-transform: capitalize;">Belajar Dasar-Dasar DevOps By dicoding.com</h4>
                            </a>
                        </div>
                        <div class="resume-item">
                            <a href="https://www.dicoding.com/certificates/72ZDOJYQJXYW" target="_blank">
                                <h4 style="text-transform: capitalize;">Cloud Practitioner Essentials (Belajar Dasar AWS
                                    Cloud) By dicoding.com</h4>
                            </a>
                        </div>
                        <div class="resume-item">
                            <a href="https://www.dicoding.com/certificates/JLX1G5M95Z72" target="_blank">
                                <h4 style="text-transform: capitalize;">Belajar Membuat Aplikasi Back-End untuk Pemula
                                    By dicoding.com</h4>
                            </a>
                        </div>
                        <div class="resume-item">
                            <a href="https://www.dicoding.com/certificates/KEXLG1OOMZG2" target="_blank">
                                <h4 style="text-transform: capitalize;">Belajar Dasar Pemrograman JavaScript By
                                    dicoding.com</h4>
                            </a>
                        </div>
                        <div class="resume-item">
                            <a href="https://www.dicoding.com/certificates/6RPN68W14P2M" target="_blank">
                                <h4 style="text-transform: capitalize;">Memulai Pemrograman Dengan Java By dicoding.com
                                </h4>
                            </a>
                        </div>
                        <div class="resume-item">
                            <a href="https://www.dicoding.com/certificates/81P2826DJPOY">
                                <h4 style="text-transform: capitalize;">Belajar Membuat Front-End Web untuk Pemula By
                                    dicoding.com</h4>
                            </a>
                        </div>
                        <div class="resume-item">
                            <a href="https://www.dicoding.com/certificates/4EXG9YLVQZRL">
                                <h4 style="text-transform: capitalize;">
                                    Belajar Dasar Pemrograman Web By dicoding.com</h4>
                            </a>
                        </div>

                    </div>
                    <div class="col-lg-6">
                        <h3 class="resume-title">Professional Experience</h3>
                        <div class="resume-item">
                            <h4>IT Manager & Software Engineer</h4>
                            <h5>2017 - Present</h5>
                            <p><em>PT. I-MANAGEMENT INDONESIA, Jakarta, Indonesia </em></p>
                            <ul>
                                <li>Build applications and websites from both front-end and back-end</li>
                                <li>Creating the latest online training solutions.</li>
                                <li>Computerized psychological tests from paper work to digital.</li>
                                <li>Create automated solutions for psychological test assessments.</li>
                                <li>Digital Marketing support for content creation and social media workflows.</li>
                            </ul>
                        </div>
                        <div class="resume-item">
                            <h4>IT Programmer & UI/UX Design</h4>
                            <h5>2018 - Present</h5>
                            <p><em>PT. INTER PAN PASIFIK FUTURES, Jakarta, Indonesia</em></p>
                            <ul>
                                <li>Build applications and websites front-end</li>
                                <li>Create a React Native based mobile application.</li>
                                <li>Create Mockup designs for websites and mobile applications.</li>
                                <li>Lead the Design Team to create presentations with multimedia.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- ======= Contact Section ======= -->
        <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Contact</h2>
                </div>


                <div class="row">
                    <div class="col-lg-4" style="margin-bottom:20px">
                        <div class="info">
                            <i class="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>Cimanggu, Tanahsareal - Bogor</p>
                        </div>
                    </div>
                    <div class="col-lg-4" style="margin-bottom:20px">
                        <div class="info">
                            <i class="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <a href="mailto:jonathan.worotikan@gmail.com">
                                <p>Jonathan.worotikan@gmail.com</p>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4" style="margin-bottom:20px">
                        <div class="info">
                            <i class="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <a href="tel:+6287880499699">
                                <p>+62-878-804-99699</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section><!-- End Contact Section -->

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer id="footer">
        <div class="container">
            <h3>Jonathan Worotikan</h3>
            <!-- <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p> -->
            <div class="social-links">
                <a href="https://www.facebook.com/jonathan.worotikan/" class="facebook"><i
                        class="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/jworotikan/" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="www.linkedin.com/in/jworotikan" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
            <div class="copyright">
                &copy; Copyright <strong><span>JWorotikan</span></strong>. All Rights Reserved
            </div>

        </div>
    </footer><!-- End Footer -->

    <div id="preloader"></div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->

    <script src="assets/vendor/purecounter/purecounter.js"></script>
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/typed.js/typed.min.js"></script>
    <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js"></script>

</body>

</html>