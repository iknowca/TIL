struct Person {
    name: String,
    birth: i32,
}

fn main() {
    let mut composers = Vec::new();
    composers.push(Person {
        name: "Palestrina".to_string(),
        birth: 1525
    });
    composers.push(Person {
        name: "Dowland".to_string(),
        birth: 1525
    });
    composers.push(Person {
        name: "Lully".to_string(),
        birth: 1632
    });

    for composer in &composers {
        println!("{}, born {}", composer.name, composer.birth);
    }
}
