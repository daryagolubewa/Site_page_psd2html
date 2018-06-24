import React, { Component } from 'react';
import AddedItems from './Containers/AddedItems'
import ItemsInCartContainer from './Containers/ItemsInCartContainer'
import GetTotalSum from './Containers/GetTotalSum'
import AddingPromocode from './Containers/AddingPromocode'



//import './App.css';
//import './CartCss.css';
//import './CssReset.css';


      const App = () => (
        <div className="main_container">

        <header>

            <div className="info">
                <div className="phones">
                    <div className="number">8 (800) 500-75-55</div>
                    <div className="call">Бесплатный звонок по России</div>
                </div>

                <div className="media">
                    <a href="#" target="_blank"><img className='pics' src="Img/Starblog.png"/>Звёздный блог</a>
                    <a href="#" target="_blank"><img className='pics' src="Img/Youtube_logo.png" />Смотрите нас на YouTube</a>
                    <a href="#" target="_blank"><img className='pics' src="Img/Youtube_icon.png" />Смотрите наш прямой эфир</a>
                </div>

            </div>

            <div className="panel">
                <div className="logos">
                    <div><img src="Img/Shop24_logo.png" /></div>
                    <div><img src="Img/NewLook.png" /></div>
                </div>

                <div><input className="search" placeholder="Поиск по сайту" />
                    <img src="Img/Magnifier.png" /></div>

                <div className="logos">
                    <div className="User"><img src="Img/User.png" /> Анастасия</div>
                    <div className="amount"><img src="Img/Shopping_bag.png" />
                        <ItemsInCartContainer/>

                    </div>
                </div>
            </div>

            <nav className="menu">
                <ul className="categories">
                    <li className="active">Одежда и аксессуары</li>
                    <li>Обувь</li>
                    <li>Украшения</li>
                    <li>Красота и здоровье</li>
                    <li>Товары для дома</li>
                    <li>Товары для кухни</li>
                </ul>

                <ul className="clothes">
                    <li>Женская одежда</li>
                    <li>Мужская одежда</li>
                    <li>Аксессуары</li>
                </ul>
            </nav>
        </header>

      <main>
          <div className="cart">

              <div className="firstLine">
                  <div className="none"></div>
                  <div className="yourCart">
                      <p>Ваша корзина</p>
                  </div>
                  <div className="none"></div>
              </div>

              <table>
                  <tbody>
                      <tr>
                          <th><p>Товар</p></th>
                          <th><p>Описание</p></th>
                          <th className='Header'><p>Количество</p></th>
                          <th className='Header'><p>Цена</p></th>
                          <th className='Header'><p>Удалить</p></th>
                      </tr>
                      <AddedItems />
                  </tbody>
              </table>

          </div>

          <div className="payment">
              <AddingPromocode/>
              <GetTotalSum/>
          </div>

          <div className="buttonWrapper">
              <div className="button">
                  Оформить заказ
              </div>
          </div>

          <div className="line">
              <div className="empty"> </div>
              <div className="add">
                  <p>Добавьте к вашему заказу</p>
              </div>
              <div className="empty"> </div>
          </div>

          <div className="additions">
              <div className="product">
                  <p><img src="Img/Bag.png" />Солнечные очки зеленого цвета в стиле ретро</p>
                  <p> 2 450 руб.  </p>
              </div>

              <div className="product">
                  <p><img src="Img/Hat.png" /> Шляпа </p>
                  <p> 800 руб.</p>
              </div>

              <div className="product">
                  <p><img src="Img/Socks.png" />Платье-миди с расклешенной юбкой</p>
                  <p> 2 450 руб.</p>
              </div>

              <div className="product">
                  <p><img src="Img/Dress.png" />'Платье-миди с расклешенной юбкой' </p>
                  <p> 2 450 руб.</p>
              </div>


          </div>

      </main>

      <footer>

          <div className="networks">
              <div>SHOP24 в социальных сетях:</div>
              <a href="#" target="_blank"><img src="Img/VK.png" /></a>
              <a href="#" target="_blank"><img src="Img/Facebook.png" /></a>
              <a href="#" target="_blank"><img src="Img/odnoklassniki.png" /></a>
              <a href="#" target="_blank"><img src="Img/Pinterest.png" /></a>
              <a href="#" target="_blank"><img src="Img/PinMe.png" /></a>
              <a href="#" target="_blank"><img src="Img/Instagram.png" /></a>
              <a href="#" target="_blank"><img src="Img/Youtube.png" /></a>
          </div>

          <nav className="contacts">

              <div className="logo">
                  <div><img src="Img/Shop24_logo_grey.png" /></div>
              </div>

              <div className="phoneNumbers">
                  <ul>
                      <li className="numbers">8 (800) 500-75-55<sup>*</sup></li>
                      <li className="call"><sup>*</sup>Бесплатный звонок по России</li>
                      <li className="numbers">8 (495) 733-96-03</li>
                  </ul>

              </div>

              <div className="footerColumn">
                  <p>Каталог товаров</p>
                  <a href="#" target="_blank">Одежда и аксессуары</a>
                  <a href="#" target="_blank">Обувь</a>
                  <a href="#" target="_blank">Украшения</a>
                  <a href="#" target="_blank">Красота и здоровье</a>
                  <a href="#" target="_blank">Товары для дома</a>
                  <a href="#" target="_blank">Товары для кухни</a>
              </div>

              <div className="footerColumn">
                  <p>Заказ</p>
                  <a href="#" target="_blank">Оплата и доставка</a>
                  <a href="#" target="_blank">Возврат</a>
                  <a href="#" target="_blank">Помощь</a>
                  <a href="#" target="_blank">Благотворительный фонд Константина Хабенского</a>
                  <a href="#" target="_blank">Гарантия на дополнительное обслуживание товара</a>
                  <a href="#" target="_blank">Пользовательское соглашение</a>
              </div>

              <div className="footerColumn">
                  <p>Shop24</p>
                  <a href="#" target="_blank">Смотреть прямой эфир</a>
                  <a href="#" target="_blank">Расписание передач</a>
                  <a href="#" target="_blank">Акции</a>
                  <a href="#" target="_blank">Личный кабинет</a>
                  <a href="#" target="_blank">Поиск и карта сайта</a>
                  <a href="#" target="_blank">Карта брендов</a>
                  <a href="#" target="_blank">Обратная связь</a>

              </div>

              <div className="footerColumn">
                  <p>О канале</p>
                  <a href="#" target="_blank">Сотрудничество</a>
                  <a href="#" target="_blank">Расписание передач</a>
                  <a href="#" target="_blank">Покупайте с нами!</a>
                  <a href="#" target="_blank">Личный кабинет</a>
                  <a href="#" target="_blank">Контакты</a>
                  <a href="#" target="_blank">Карта брендов</a>
                  <a href="#" target="_blank">Обратная связь</a>
              </div>
          </nav>

          <div className="copyright">
              <p>Copyright© Товар ООО "Стиль и Мода", 2014-2016. Все права защищены.</p>
              <p>При использовании материалов сайта ссылка на www.shop24.com обязательна.</p>
              <p>115193, Москва, ул. Кожуховская 5-я, д.9, помещение VII</p>
              <p>Телефон 8 (800) 500-75-55</p>
          </div>


      </footer>
        </div>


)

export default App;
