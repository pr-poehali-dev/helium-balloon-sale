import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface BalloonComposition {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  colors: string[];
}

const compositions: BalloonComposition[] = [
  {
    id: 1,
    title: 'Праздничный микс',
    category: 'Классические',
    price: '2 500 ₽',
    image: 'https://cdn.poehali.dev/projects/be39ae43-4a6b-4687-b2ba-e319481741f2/files/f91df700-fe1f-474d-a7f6-7eecf5c1eda7.jpg',
    colors: ['розовый', 'фиолетовый', 'золотой']
  },
  {
    id: 2,
    title: 'Романтическое сердце',
    category: 'Любовь',
    price: '3 200 ₽',
    image: 'https://cdn.poehali.dev/projects/be39ae43-4a6b-4687-b2ba-e319481741f2/files/c5153857-0b96-4f05-9996-346c16de55cd.jpg',
    colors: ['красный', 'розовый']
  },
  {
    id: 3,
    title: 'Цифры на праздник',
    category: 'День рождения',
    price: '4 000 ₽',
    image: 'https://cdn.poehali.dev/projects/be39ae43-4a6b-4687-b2ba-e319481741f2/files/3ba0012c-6bda-44c3-b43e-ae6f5567e248.jpg',
    colors: ['золотой', 'серебряный']
  },
  {
    id: 4,
    title: 'Детский восторг',
    category: 'Детские',
    price: '2 800 ₽',
    image: 'https://cdn.poehali.dev/projects/be39ae43-4a6b-4687-b2ba-e319481741f2/files/f91df700-fe1f-474d-a7f6-7eecf5c1eda7.jpg',
    colors: ['голубой', 'розовый', 'желтый']
  },
  {
    id: 5,
    title: 'Нежность',
    category: 'Классические',
    price: '2 900 ₽',
    image: 'https://cdn.poehali.dev/projects/be39ae43-4a6b-4687-b2ba-e319481741f2/files/c5153857-0b96-4f05-9996-346c16de55cd.jpg',
    colors: ['розовый', 'персиковый']
  },
  {
    id: 6,
    title: 'Юбилей',
    category: 'День рождения',
    price: '5 500 ₽',
    image: 'https://cdn.poehali.dev/projects/be39ae43-4a6b-4687-b2ba-e319481741f2/files/3ba0012c-6bda-44c3-b43e-ae6f5567e248.jpg',
    colors: ['золотой', 'черный']
  }
];

const categories = ['Все', 'Классические', 'День рождения', 'Любовь', 'Детские'];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredCompositions = activeCategory === 'Все' 
    ? compositions 
    : compositions.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-4xl">🎈</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              ШароGood
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Каталог
            </a>
            <a href="#delivery" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Доставка
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              О нас
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Контакты
            </a>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-pink-100 animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors font-medium py-2">
                Каталог
              </a>
              <a href="#delivery" className="text-gray-700 hover:text-primary transition-colors font-medium py-2">
                Доставка
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium py-2">
                О нас
              </a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors font-medium py-2">
                Контакты
              </a>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 w-full">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Воздушные шары<br />для вашего праздника
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Создаём яркие эмоции с помощью красивых композиций из гелиевых шаров. 
              Доставка по всему городу за 2 часа!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-lg px-8"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Выбрать композицию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 text-lg px-8"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-5xl mb-4 animate-float">🚚</div>
                <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                <p className="text-gray-600">Привезём за 2 часа или к нужному времени</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '0.5s' }}>🎨</div>
                <h3 className="text-xl font-bold mb-2">Индивидуальный дизайн</h3>
                <p className="text-gray-600">Создадим композицию по вашему эскизу</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '1s' }}>✨</div>
                <h3 className="text-xl font-bold mb-2">Качество</h3>
                <p className="text-gray-600">Используем только премиум материалы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Галерея композиций
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                    : "border-pink-200 text-gray-700 hover:bg-pink-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompositions.map((composition) => (
              <Card 
                key={composition.id} 
                className="group overflow-hidden border-pink-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={composition.image}
                    alt={composition.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-pink-600 backdrop-blur-sm">
                    {composition.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{composition.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {composition.colors.map((color) => (
                      <Badge key={color} variant="secondary" className="bg-purple-100 text-purple-700">
                        {color}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-600">{composition.price}</span>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Доставка
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-pink-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🕐</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Экспресс-доставка</h3>
                    <p className="text-gray-600 mb-2">Привезём за 2 часа</p>
                    <p className="text-2xl font-bold text-pink-600">500 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📅</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Плановая доставка</h3>
                    <p className="text-gray-600 mb-2">К нужному времени и дате</p>
                    <p className="text-2xl font-bold text-purple-600">300 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <Card className="border-pink-100 bg-gradient-to-br from-pink-50 to-purple-50">
              <CardContent className="p-8">
                <Icon name="Gift" size={48} className="mx-auto mb-4 text-pink-500" />
                <h3 className="text-2xl font-bold mb-2">Бесплатная доставка</h3>
                <p className="text-gray-600">При заказе от 5 000 ₽</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            О нас
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Мы — команда профессионалов, которая уже 5 лет создаёт праздничное настроение с помощью воздушных шаров. 
            Каждая композиция — это маленькое произведение искусства, сделанное с любовью и вниманием к деталям.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            За это время мы украсили более 10 000 праздников и видели столько счастливых улыбок! 
            Ваша радость — наша главная награда.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">5+</div>
              <div className="text-gray-600">лет работы</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">10k+</div>
              <div className="text-gray-600">праздников</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
              <div className="text-gray-600">композиций</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">100%</div>
              <div className="text-gray-600">качество</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Контакты
          </h2>
          <Card className="border-pink-100">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <a href="tel:+79991234567" className="text-gray-600 hover:text-pink-500 transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:info@sharogood.ru" className="text-gray-600 hover:text-purple-500 transition-colors">
                      info@sharogood.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-gray-600">
                      г. Москва, ул. Праздничная, 123
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Время работы</h3>
                    <p className="text-gray-600">
                      Ежедневно с 9:00 до 21:00
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full mt-8 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                size="lg"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-3xl">🎈</div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              ШароGood
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Создаём праздничное настроение с 2019 года
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <span>© 2024 ШароGood</span>
            <span>•</span>
            <a href="#" className="hover:text-pink-500 transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
