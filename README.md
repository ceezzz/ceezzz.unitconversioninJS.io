<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Bare - Start Bootstrap Template</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <style>
    body {
        padding-top: 70px;
        /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */
    }
    </style>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <a class="navbar-brand" href= "http://ceezzz.github.io">Github Portfolio</a>
            </div>
        </div>
    </nav>

    <!-- Page Content -->
    <div class="container">

        <div class="row">
            <div class="col-lg-12 text-center">
                <div>
                    <h1>ONLINE UNIT CONVERTER</h1>
                    <p>This is your one stop shop for unit conversions. We currently support conversions of <span style="color:red; font-weight:bold"> fahrenheit to celsius, lbs to kgs, and inches to feet</span> as well as vice versa. New conversions will be added at a later time. 
                    </p>
                </div><br>
                
                <div>
                    <h2>Mass Conversion</h2>
                    <p>
                        <input type="text" id="mass" />
                        <input type="button" id="lbs_to_kgs" value="lbs to kgs" />
                        <input type="button" id="kgs_to_lbs" value="kgs to lbs" />    
                    </p>
                    <p id="massresult"></p>
                    <script src="js/mass.js"></script>
                </div><br>
                
                <div>
                    <h2>Distance Conversion</h2>
                    <p>
                        <input type="text" id="distance" />
                        <input type="button" id="in_to_ft" value="in to ft" />
                        <input type="button" id="ft_to_in" value="ft to in" />
                    </p> 
                    <p id="distresult"></p>
                    <script src="js/distance.js"></script>
                </div><br>
                
                <div>
                    <h2>Temperature Conversion</h2>
                    <p>
                        <input type="text" id="temperature" />
                        <input type="button" id="f_to_k" value="F to K" />
                        <input type="button" id="k_to_f" value="K to F" />
                    </p>
                    <p id="tempresult"></p>
                    <script src="js/temperature.js"></script>
                </div><br>
                <ul class="list-unstyled">
                    <li>Copyright &copy; Cesar Jaimes 2015</li>
                </ul>
            </div>
        </div>
        <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- jQuery Version 1.11.1 -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

</body>
</html>
