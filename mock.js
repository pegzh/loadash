export default {
	getter (key) {
		return $key;
	},
	setter (key, val) {
		$key = val;
	}
}
