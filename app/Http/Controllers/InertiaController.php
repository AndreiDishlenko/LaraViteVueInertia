<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Contracts\EventDispatcher\Event;

class InertiaController extends Controller
{
    static public function show() {

        $current_locale = 'ua';
		$canonical = '';		

		App::setLocale($current_locale);

		$lang = '';
		if ($current_locale=='ua') $lang='uk';
		if ($current_locale=='en') $lang='en';

        $title = [
            "ua" => "POS Додаток для автоматизації продажів з мобільних пристроїв - POSIO"
        ];
        $description = [
            "ua" => "POS Додаток для продажів з мобільних пристроїв і POS терміналів у роздрібних точках продажу товарів і послуг"
        ];
        $keywords = [
            "ua" => "Роздрібна торгівля, ПРРО, додаток, планшет, мобільний, сенсорний екран, автоматизація POS, Android, IOS, Poster, кав'ярня"
        ];

        return Inertia::render('Home', [
            'title' => $title[$current_locale],
            'description' => $description[$current_locale],
            'keywords' => $keywords[$current_locale],
        ]);
    }
}
