import style from './AvailableMeals.module.css';
import Card from '../Ui/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '김밥',
    description: '컵라면은 서비스',
    price: 5000,
  },
  {
    id: 'm2',
    name: '피자',
    description: '어제도 먹고 오늘도 먹었어요.',
    price: 10000,
  },
  {
    id: 'm3',
    name: '맥도날드',
    description: '마늘버거 단종되기 전에 얼른 먹으세요.',
    price: 6000,
  },
  {
    id: 'm4',
    name: '샐러드파스타',
    description: '오늘 제 점심입니다.',
    price: 8000,
  },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
        key={meal.id} 
        id={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
    />);
  return (
    <section className={style.meals}>
    <Card>
        <ul>
            {mealsList}
        </ul>
    </Card>
    </section>
  );
};

export default AvailableMeals;