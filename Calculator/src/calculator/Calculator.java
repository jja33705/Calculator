package calculator;

import java.awt.Color;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.math.BigDecimal;
import java.util.ArrayList;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class Calculator extends JFrame implements ActionListener {
	private JLabel notice;
	private JLabel type;
	private JLabel result;
	private String[] buttons = {"^", "sqrt", "Back", "C", "7", "8", "9", "/", "4", "5", "6", "X", "1", "2", "3", "-", ".", "0", "=", "+"};
	boolean typedOperator = true;
	
	public Calculator() {
		this.setTitle("계산기");
		this.setSize(500, 700);
		this.setLayout(new GridLayout(2,1));
		
		JPanel northPanel = new JPanel();
		northPanel.setBackground(Color.BLACK);
		northPanel.setLayout(new GridLayout(3,1));
		
		notice = new JLabel("수식을 입력하세요.");
		notice.setForeground(Color.GRAY);
		notice.setHorizontalAlignment(JLabel.RIGHT);
		notice.setFont(new Font("맑은 고딕",Font.TRUETYPE_FONT, 20));
		northPanel.add(notice);
		
		type = new JLabel();
		type.setForeground(Color.WHITE);
		type.setHorizontalAlignment(JLabel.RIGHT);
		type.setFont(new Font("맑은 고딕", Font.TRUETYPE_FONT, 50));
		northPanel.add(type);
		
		result = new JLabel();
		result.setForeground(Color.LIGHT_GRAY);
		result.setHorizontalAlignment(JLabel.RIGHT);
		result.setFont(new Font("맑은 고딕", Font.TRUETYPE_FONT, 30));
		northPanel.add(result);
		
		this.add(northPanel);
		
		
		JPanel southPanel = new JPanel();
		southPanel.setBackground(Color.BLACK);
		southPanel.setLayout(new GridLayout(5, 4, 5, 5));
		for(int i = 0; i < buttons.length; i++) {
			JButton button = new JButton(""+buttons[i]);
			button.setFont(new Font("맑은 고딕",Font.TRUETYPE_FONT, 20));
			button.setFocusable(false);
			if(i%4 == 3) {
				button.setBackground(Color.LIGHT_GRAY);
			} else {
				button.setBackground(Color.WHITE);
			}
			button.addActionListener(this);
			southPanel.add(button);
		}
		
		this.add(southPanel);
		
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setVisible(true);
	}
	
	public static void main(String[] args) {
		new Calculator();
	}
	
	private void calculate() {
		String s = type.getText();
		if(s.charAt(s.length()-1) == '-')return;
		int index = 0;
		ArrayList<String> list = new ArrayList<>();
		for(int i = 0; i < s.length(); i++) {
			if((s.charAt(i) < '0' || s.charAt(i) > '9') && s.charAt(i) != '.') {
				if(index == i) {
					list.add(String.valueOf(s.charAt(i)));
				} else {
					list.add(s.substring(index, i));
					list.add(String.valueOf(s.charAt(i)));
				}
				index = i+1;
			}
		}
		list.add(s.substring(index));
		
		
		for(int i = list.size()-1; i >= 0; i--) {
			if(list.get(i).equals("-")) {
				if(list.get(i+1).charAt(0) == '-') {
					list.set(i+1, list.get(i+1).substring(1));
				} else {
					list.set(i+1, "-" + list.get(i+1));
				}
				if(i == 0 || list.get(i - 1).charAt(0) < '0' || list.get(i - 1).charAt(0) > '9') {
					list.remove(i);
				} else {
					list.set(i, "+");
				}
			}
		}
		
		while(list.size() > 1) {
			for(int i = 1; i < list.size();) {
				if(list.get(i).charAt(0) == 'X') {
					double n = Double.parseDouble(list.get(i-1)) * Double.parseDouble(list.get(i+1));
					list.remove(i-1);
					list.remove(i-1);
					list.set(i-1, String.valueOf(new BigDecimal(n)));
				} else i += 2;
			}
			for(int i = 1; i < list.size();) {
				if(list.get(i).charAt(0) == '/') {
					double n = Double.parseDouble(list.get(i-1)) / Double.parseDouble(list.get(i+1));
					list.remove(i-1);
					list.remove(i-1);
					list.set(i-1, String.valueOf(n));
				} else i += 2;
			}
			for(int i = 1; i < list.size();) {
				if(list.get(i).charAt(0) == '+') {
					double n = Double.parseDouble(list.get(i-1)) + Double.parseDouble(list.get(i+1));
					list.remove(i-1);
					list.remove(i-1);
					list.set(i-1, String.valueOf(new BigDecimal(n)));
				} else i += 2;
			}
		}
		result.setText(String.valueOf(list.get(0)));
		notice.setText("수식을 계산중입니다...");
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		String command = e.getActionCommand();
		if(command.equals("C")) {
			type.setText("");
			result.setText("");
			typedOperator = true;
			notice.setText("수식을 입력하세요.");
			return;
		}
		if(command.equals("Back")) {
			if(type.getText().length() <= 1) {
				type.setText("");
				result.setText("");
				notice.setText("수식을 입력하세요.");
				typedOperator = true;
				return;
			}
			String s = type.getText().substring(0,type.getText().length()-1);
			type.setText(s);
			typedOperator = (s.charAt(s.length()-1) >= '0' && s.charAt(s.length()-1) <= '9') ? false : true;
		} else if((command.charAt(0) >= '0' && command.charAt(0) <= '9')) {
			type.setText(type.getText()+command);
			typedOperator = false;
		}else if(command.equals("-")) {
			type.setText(type.getText()+command);
			typedOperator = true;
		} else {
			if(typedOperator) return;
			if(command.charAt(0) == '=') {
				type.setText(result.getText());
				typedOperator = false;
				return;
			} else if(command.equals("^")) {
				calculate();
				Double n = Double.parseDouble(result.getText()) * Double.parseDouble(result.getText());
				BigDecimal b = new BigDecimal(n);
				type.setText(""+b);
				result.setText(""+b);
			} else if(command.equals("sqrt")) {
				calculate();
				if(Double.parseDouble(result.getText()) < 0) {
					return;
				}
				Double n = Math.sqrt(Double.parseDouble(result.getText()));
				type.setText(""+n);
				result.setText(""+n);
			} else if(command.charAt(0) == '.') {
				boolean canType = true;
				String s = type.getText();
				for(int i = s.length()-1; i >= 0; i--) {
					if(s.charAt(i) > '9' || s.charAt(i) < '0') {
						if(s.charAt(i) == '.') canType = false;
						break;
					}
				}
				if(canType) {
					type.setText(type.getText()+command);
					typedOperator = true;
				}
			} else {
				type.setText(type.getText()+command);
				typedOperator = true;
			}
		}
		if(typedOperator == false) {
			calculate();
		}
	}
	
}
