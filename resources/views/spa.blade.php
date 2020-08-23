<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8" />
  <link rel="icon" type="image/png" href="/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>
    Freshbuys
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--  Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
  <!-- CSS Files -->

  <link href="/css/style.css" rel="stylesheet" />
  <link href="/css/bootstrap.min.css" rel="stylesheet">
</head>

<body style="margin:0">
  <div id="app">
    
    <app></app>
  </div>
  
  @include('ordering.layout.scripts')
  <script src="{{mix('js/app.js')}}"></script>
  <script src="https://unpkg.com/vue-recaptcha@latest/dist/vue-recaptcha.min.js"></script>
</body>

</html>
