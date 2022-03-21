# Elementor Datepicker Localization

Load current site locale for Elementor form datepicker.

## Installation

#### Composer:

**Recommended method**, [Roots Bedrock](https://roots.io/bedrock/) and [WP-CLI](http://wp-cli.org/)
```shell
$ composer require rendar/elementor-datepicker-extension
$ wp plugin activate elementor-datepicker-extension
```

#### Manual:

* Download the [zip file](https://github.com/rob1998/elementor-datepicker-extension/archive/master.zip)
* Unzip to your sites plugin folder
* Activate via WordPress

#### WP-CLI:

```shell
$ wp plugin install https://github.com/rob1998/elementor-datepicker-extension/archive/master.zip --activate
```

#### Requirements:

* [PHP](http://php.net/manual/en/install.php) >= 7.4
* [Wordpress](https://wordpress.org/download/) >= 5.9.2
* [Elementor](https://wordpress.org/plugins/elementor/) >= 3.5.6

## Usage

Install, activate and ready!

## Filters

You can change localization language with `'elementor/datepicker/locale'`, change date format with `'elementor/datepicker/format'` and change time picker to 24h format with `'elementor/datepicker/24h'`.

Place on your themes functions.php file.

```php
// Example, force 'es' language
add_filter( 'elementor/datepicker/locale', function(){ return 'es'; } );

// Example, change date format to dd/mm/yyyy
add_filter( 'elementor/datepicker/format', function(){ return 'd/m/Y'; } );

// Use 24h format on time input
add_filter( 'elementor/datepicker/24h', '__return_true' );
```

## Changelog

### 1.0.0 - 20 November 2019
* Initial release
