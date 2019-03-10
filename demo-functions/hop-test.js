(test, assert) => {
    let add = ff('https://gist.githubusercontent.com/devmachiine/4433df78dc698aebad5aa37be15475fa/raw/59fdf8c2031d2418539adb98dfad73fcd1469acd/add.js')
    let two_thousand = await add(123, 1877)

    return test('remote functions can load other remote functions', () => assert(two_thousand, 2000))
}
