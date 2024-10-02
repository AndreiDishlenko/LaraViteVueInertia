<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>{{ $title }}</title>
    <meta name="description" content="{{ $description }}"/>
	
	<link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon"/>	
    
	<meta name="robots" content="index, follow">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="keywords" content="{{ $keywords }}"/>

	@if ( !empty($canonical) )
		<link rel="canonical" href="{{ $canonical }}" />
	@endif
    
    @vite('resources/js/app.js')
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>