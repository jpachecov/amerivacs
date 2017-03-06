<!DOCTYPE html>

<!-- Author: Jean Pierre Pacheco Avila (jpachecov)-->
<html lang="en" ng-app='amerivacs'>
  <head>
    <meta charset="utf-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AmeriVacS</title>

    <link rel="shortcut icon" type="image/png" href="amerivacs/img/logo_menu.png"/>

    <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
    <div ng-controller='controlador'>



      <div class='container container-fluid'>
        <header class=' header col-md-12 col-sm-12 col-xs-12'>

          <ul class='menu col-md-12 col-sm-12 col-xs-12 nopadding' style='background-color:white; z-index:5;'>
            <li class="col-md-12 col-sm-12 col-xs-12">
               <a class='logo_container col-md-3 col-sm-7 col-xs-9' href="/home">
                <img class='logo_up' src="img/home/logo_000.png" alt="AmeriVacS">
               </a>     
            </li>
            <li class='col-sm-1 col-xs-1' style="padding:8px 0 8px 0">
              <a class="icon" href="http://catalog.amerivacs.com/browseGroup.cfm" target="_blank">
                <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li class='col-xs-2 col-sm-2 col-md-1'>
              <a href="/contact">Contact</a> 
            </li>
            <li class='raya-derecha col-xs-3 col-sm-3 col-md-1' ng-mouseover="showMenu()" ng-mouseleave="hideMenu()">
              <a href="/products">Products<spana class='trian'>&#x25BC</span> </a>  
            </li>
            <li class='raya-derecha col-xs-3 col-sm-3 col-md-1'>
              <a href="/about">About us</a>  
            </li>
            <li class='raya-derecha col-xs-2 col-sm-3 col-md-1'>
              <a href="/home">Home</a>  
            </li>

          <li class='col-md-12 col-sm-12 col-xs-12' style='position:absolute; top:210px; height:110px; overflow:hidden; padding:0px'>

            <div class='col-md-12 col-sm-12 col-xs-12 show-menu' style='position:absolute; z-index:2; top:-3px;'>
              <ul class='col-md-3 col-xs-12 col-sm-12' ng-mouseover="showMenu()" ng-mouseleave="hideMenu()" style='padding:0%; float:right;'>
                <li class='hover-2 boton col-md-9 col-sm-6 col-xs-6  r-bottom back-white2 nopadding txt-c' style='float:left'>
                  <a class='font1' href="/compare">Compare</a>
                </li>
                <li class='hover-2 boton col-md-9 col-sm-6 col-xs-6 back-white2 nopadding txt-c' style='float:left'>
                  <a class='font1' href="/selector">Cyber Selector</a>
                </li>      
              </ul>
            </div>

          </li>

          </ul>

          <!-- Columna para los botones -->


        </header>
      </div>

            <!-- Carrito de compras -->
      <div class='container cart-container' style='position:fixed; z-index:20; top:-600px; padding:0%;' ng-include='carrito_url'></div>

      <div class="slide-animate-container" style='overflow:hidden'>
        <!--<div  ng-include="currentPage" class="animation contenido-princi" [autoscroll="true"]></div>-->
        <div  ng-view class="animation contenido-princi" [autoscroll="true"]></div>
      </div>


      <div class="footer container nopadding">
         <div class='info_foot col-md-7 col-sm-6 col-xs-12'>
          <span style='font-weight: bold;'>AmeriVacS</span>
           <p>
             CONTACT US
             <br><br>
             <span style='width:49%; display:inline-block; margin:0%;'>1518 Lancaster Point Way</span>
             <span style='width:49%; display:inline-block; margin:0%;'>Tel (619) 498 8227</span>
             <br>
             San Diego, CA 92154
           </p>
         </div>
         <div class='submenu col-md-5 col-xs-12 col-sm-6'>
           <span class='cursor hov4 col-md-3 col-xs-3' ng-click='loadPage("home")'>HOME</span>
           <span class='cursor hov4 col-md-3 col-xs-3' ng-click='loadPage("about_us")'>ABOUT US</span>
           <span class='cursor hov4 col-md-3 col-xs-3' ng-click='loadPage("products")'>PRODUCTS</span>
           <span class='cursor hov4 col-md-3 col-xs-3' ng-click='loadPage("contact")'>CONTACT</span>
         </div>

         <div class='col-md-5 col-sm-6 col-xs-12'>
            
            <div class='col-md-6 col-xs-6 col-sm-6' style='height:2px'></div>
           <span class='col-md-4 col-sm-5 col-xs-6 hov4 cursor' ng-click='loadPage("compare")' style='text-align:left;'>&#9658;Compare</span>
           
            <div class='col-md-6 col-xs-6 col-sm-6' style='height:2px'></div>
           <span class='col-md-6 col-sm-6 col-xs-6 hov4 cursor' ng-click='loadPage("selector")' style='text-align:left;' > &#9658;Vacuum Selector</span>


           <div class='col-md-6 col-xs-6 col-sm-6' style='height:2px'></div>
           <span class='col-md-6 col-sm-6 col-xs-6 hov4 cursor' ng-click='toProduct("AVN")' style='text-align:left;' > &#9658;AVN</span>
           <div class='col-md-6 col-xs-6 col-sm-6' style='height:2px'></div>
           <span class='col-md-6 col-sm-6 col-xs-6 hov4 cursor' ng-click='toProduct("AVS")' style='text-align:left;' > &#9658;AVS</span>
           <div class='col-md-6 col-xs-6 col-sm-6' style='height:2px'></div>
           <span class='col-md-6 col-sm-6 col-xs-6 hov4 cursor' ng-click='toProduct("CAVN")' style='text-align:left;' > &#9658;CAVN</span>
           <div class='col-md-6 col-xs-6 col-sm-6' style='height:2px'></div>
           <span class='col-md-6 col-sm-6 col-xs-6 hov4 cursor' ng-click='toProduct("PARTS")' style='text-align:left;' > &#9658;PARTS</span>
         </div>
         <div class='foot-img col-md-8 col-sm-12 col-xs-12' style='padding-left:0%'>
           <img src="img/home/logo-menu_000.png" alt="">
         </div>
      </div>
    </div>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  
    <script src="js/jquery-1.11.3.min.js"></script>
    <script src="js/velocity.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/angular.min.js"></script>
    <script src="js/angular-route.js"></script>   
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.5.6/angular-sanitize.js"></script>
    <script src="js/sizeChecker.js"></script>
    <!--<script src="http://sdks.shopifycdn.com/js-buy-sdk/latest/shopify-buy.polyfilled.globals.min.js"></script>-->
    <script src="js/app.js"></script>
    <script src="js/products.js"></script>
    <script src="js/compare.js"></script>
    <script src="js/selector.js"></script>
    <script src="js/contact.js"></script>
    

  </body>
</html>
