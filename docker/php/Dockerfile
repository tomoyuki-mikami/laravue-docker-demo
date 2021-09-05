FROM php:7.4-fpm
COPY php.ini /usr/local/etc/php/

RUN apt-get update \
&& apt-get install -y libpq-dev curl gnupg unzip \
&& docker-php-ext-install pdo pdo_pgsql pdo_mysql

# nodejs, yarn install
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn

# Composer install
COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /var/www