const hanoiTower = (n, source, auxiliary, target) => {
	if (n === 1) {
		console.log(`Move disk 1 from ${source} to ${target}`)
		return
	}
	hanoiTower(n - 1, source, target, auxiliary)
	console.log(`Move disk ${n} from ${source} to ${target}`)
	hanoiTower(n - 1, auxiliary, source, target)
}

hanoiTower(5, 'First', 'Middle', 'Last')
